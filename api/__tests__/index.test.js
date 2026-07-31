const { describe, it } = require('node:test');
const assert = require('node:assert');
const request = require('supertest');
const rewire = require('rewire');

// Require the app normally for supertest
const app = require('../index.js');

// Require the app with rewire to test internal functions
const rewiredApp = rewire('../index.js');
const generateToken = rewiredApp.__get__('generateToken');
const verifyToken = rewiredApp.__get__('verifyToken');

describe('API Endpoints', () => {
  it('GET /api/health should return 200 and status ok', async () => {
    const res = await request(app).get('/api/health');
    assert.strictEqual(res.status, 200);
    assert.strictEqual(res.body.status, 'ok');
    assert.strictEqual(res.body.env, 'production-dex');
  });

  it('GET /api/v1/_chal should return nonce, difficulty, and sid', async () => {
    const res = await request(app).get('/api/v1/_chal');
    assert.strictEqual(res.status, 200);
    assert.ok(res.body.nonce);
    assert.strictEqual(res.body.difficulty, '0000');
    assert.ok(res.body.sid);
  });

  it('POST /api/v1/_proc with missing data should return 400', async () => {
    const res = await request(app).post('/api/v1/_proc').send({});
    assert.strictEqual(res.status, 400);
    assert.strictEqual(res.body.error, 'Incomplete security context');
  });

  it('POST /api/v1/_proc with invalid nonce should return 403', async () => {
    const payload = {
      nonce: 'invalid_nonce',
      hash: 'somehash',
      solution: 'somesolution',
      fingerprint: 'fp',
      appId: 'app123',
      sid: 'somesid'
    };
    const res = await request(app).post('/api/v1/_proc').send(payload);
    assert.strictEqual(res.status, 403);
    assert.strictEqual(res.body.error, 'Challenge expired or invalid');
  });
});

describe('Helper Functions', () => {
  it('generateToken and verifyToken should work correctly', () => {
    const ip = '127.0.0.1';
    const sessionId = 'test_session';
    const fingerprint = 'test_fingerprint';
    const appId = 'app_123';

    const token = generateToken(ip, sessionId, fingerprint, appId);
    assert.ok(token);

    const isValid = verifyToken(token, ip, sessionId, fingerprint, appId);
    assert.strictEqual(isValid, true);
  });

  it('verifyToken should fail with incorrect appId', () => {
    const ip = '127.0.0.1';
    const sessionId = 'test_session';
    const fingerprint = 'test_fingerprint';
    const appId = 'app_123';
    const wrongAppId = 'app_456';

    const token = generateToken(ip, sessionId, fingerprint, appId);

    const isValid = verifyToken(token, ip, sessionId, fingerprint, wrongAppId);
    assert.strictEqual(isValid, false);
  });

  it('verifyToken should fail with tampered token', () => {
    const ip = '127.0.0.1';
    const sessionId = 'test_session';
    const fingerprint = 'test_fingerprint';
    const appId = 'app_123';

    const token = generateToken(ip, sessionId, fingerprint, appId);

    // Tamper the token by modifying the raw string
    const raw = Buffer.from(token, "base64url").toString("utf8");
    const [payload, sig] = raw.split("::");
    const tamperedRaw = payload + '1' + '::' + sig; // Modify the payload
    const tamperedToken = Buffer.from(tamperedRaw).toString("base64url");

    const isValid = verifyToken(tamperedToken, ip, sessionId, fingerprint, appId);
    assert.strictEqual(isValid, false);
  });
});
