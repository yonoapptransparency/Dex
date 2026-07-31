const test = require('node:test');
const assert = require('node:assert');
const rewire = require('rewire');
const request = require('supertest');

// Load via rewire once to avoid double evaluation
const apiIndex = rewire('./index.js');
const getIp = apiIndex.__get__('getIp');
const ensureSession = apiIndex.__get__('ensureSession');
const generateToken = apiIndex.__get__('generateToken');
const verifyToken = apiIndex.__get__('verifyToken');
const safeDecrypt = apiIndex.__get__('safeDecrypt');
const app = apiIndex;

test('Unit Tests for api/index.js helpers', async (t) => {
  await t.test('getIp returns correct IP', () => {
    assert.strictEqual(getIp({ headers: { 'x-forwarded-for': '192.168.1.1, 10.0.0.1' } }), '192.168.1.1');
    assert.strictEqual(getIp({ headers: { 'x-real-ip': '10.0.0.1' } }), '10.0.0.1');
    assert.strictEqual(getIp({ headers: {}, socket: { remoteAddress: '127.0.0.1' } }), '127.0.0.1');
    assert.strictEqual(getIp({ headers: {} }), 'unknown');
  });

  await t.test('ensureSession returns existing session', () => {
    const req = { cookies: { '__Host-sid': 'existing-session' } };
    const res = { cookie: () => { assert.fail('Should not set cookie'); } };
    assert.strictEqual(ensureSession(req, res), 'existing-session');
  });

  await t.test('ensureSession creates new session if none exists', () => {
    const req = { cookies: {} };
    let setCookieCalled = false;
    const res = {
      cookie: (name, val, opts) => {
        assert.strictEqual(name, '__Host-sid');
        assert.ok(val.length > 0);
        assert.ok(opts.httpOnly);
        setCookieCalled = true;
      }
    };
    const newSid = ensureSession(req, res);
    assert.ok(setCookieCalled);
    assert.ok(newSid.length > 0);
  });

  await t.test('generateToken and verifyToken', () => {
    const ip = '127.0.0.1';
    const sessionId = 'test-session';
    const fingerprint = 'test-fingerprint';
    const appId = 'test-app';

    const token = generateToken(ip, sessionId, fingerprint, appId);
    assert.ok(token);

    // Valid token
    assert.ok(verifyToken(token, ip, sessionId, fingerprint, appId));

    // Invalid app id
    assert.ok(!verifyToken(token, ip, sessionId, fingerprint, 'wrong-app'));

    // Tampered token (modifying the payload by converting to ascii, modifying and converting back)
    const raw = Buffer.from(token, "base64url").toString("utf8");
    const [payload, sig] = raw.split("::");
    const tamperedRaw = payload + "tampered::" + sig;
    const tamperedToken = Buffer.from(tamperedRaw).toString("base64url");

    assert.ok(!verifyToken(tamperedToken, ip, sessionId, fingerprint, appId));

    // Invalid token format
    assert.ok(!verifyToken('invalid-token', ip, sessionId, fingerprint, appId));
  });

  await t.test('safeDecrypt', () => {
    const secret = 'my-secret';
    const CryptoJS = require('crypto-js');
    const ciphertext = CryptoJS.AES.encrypt('hello world', secret).toString();

    assert.strictEqual(safeDecrypt(ciphertext, secret), 'hello world');
    assert.strictEqual(safeDecrypt('', secret), '');
    assert.strictEqual(safeDecrypt('invalid-ciphertext', secret), '');
  });
});

test('Integration Tests for API Endpoints', async (t) => {
  await t.test('GET /api/health should return status ok', async () => {
    const response = await request(app).get('/api/health');
    assert.strictEqual(response.status, 200);
    assert.strictEqual(response.body.status, 'ok');
    assert.strictEqual(response.body.env, 'production-dex');
  });

  await t.test('GET /api/unknown-endpoint should return 404', async () => {
    const response = await request(app).get('/api/unknown-endpoint');
    assert.strictEqual(response.status, 404);
    assert.strictEqual(response.body.error, 'Endpoint not found');
  });

  await t.test('GET /robots.txt should return robots.txt content', async () => {
    const response = await request(app).get('/robots.txt');
    assert.strictEqual(response.status, 200);
    assert.match(response.text, /User-agent: \*/);
    assert.match(response.text, /Allow: \//);
  });

  await t.test('GET /api/v1/link-check without id should return configured false', async () => {
    const response = await request(app).get('/api/v1/link-check');
    assert.strictEqual(response.status, 200);
    assert.strictEqual(response.body.configured, false);
  });

  await t.test('GET /api/v1/public/some-type should return empty array by default', async () => {
    const response = await request(app).get('/api/v1/public/some-type');
    assert.strictEqual(response.status, 200);
    assert.deepStrictEqual(response.body, []);
  });
});
