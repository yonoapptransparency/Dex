const { test, describe } = require('node:test');
const assert = require('node:assert');
const rewire = require('rewire');
const crypto = require('crypto');

// Load the api/index.js module
const apiModule = rewire('./index.js');
const generateToken = apiModule.__get__('generateToken');
const TOKEN_SECRET = apiModule.__get__('TOKEN_SECRET');

describe('generateToken', () => {
  test('should return a valid base64url encoded string', () => {
    const token = generateToken('127.0.0.1', 'session123', 'fingerprint123', 'app1');
    assert.strictEqual(typeof token, 'string');

    // Check if it's base64url encoded (contains only a-zA-Z0-9-_)
    assert.match(token, /^[A-Za-z0-9\-_]+$/);
  });

  test('should contain payload and signature separated by :: when decoded', () => {
    const token = generateToken('127.0.0.1', 'session123', 'fingerprint123', 'app1');
    const decoded = Buffer.from(token, 'base64url').toString('utf8');

    const parts = decoded.split('::');
    assert.strictEqual(parts.length, 2);

    const [payload, sig] = parts;
    assert.ok(payload);
    assert.ok(sig);
  });

  test('payload should contain correct values and structure', () => {
    const beforeTime = Math.floor(Date.now() / 1000);
    const token = generateToken('192.168.1.1', 'sess_abc', 'fp_xyz', 'test_app');
    const decoded = Buffer.from(token, 'base64url').toString('utf8');
    const [payload, _] = decoded.split('::');
    const payloadParts = payload.split('|');

    assert.strictEqual(payloadParts.length, 5);
    assert.strictEqual(payloadParts[0], '192.168.1.1');
    assert.strictEqual(payloadParts[1], 'sess_abc');
    assert.strictEqual(payloadParts[2], 'fp_xyz');
    assert.strictEqual(payloadParts[3], 'test_app');

    // Check expiry
    const expires = parseInt(payloadParts[4], 10);
    const afterTime = Math.floor(Date.now() / 1000);

    assert.ok(expires >= beforeTime + 1800, `Expires ${expires} is not >= ${beforeTime + 1800}`);
    assert.ok(expires <= afterTime + 1800, `Expires ${expires} is not <= ${afterTime + 1800}`);
  });

  test('signature should be valid HMAC-SHA256 of the payload', () => {
    const token = generateToken('10.0.0.1', 's1', 'f1', 'a1');
    const decoded = Buffer.from(token, 'base64url').toString('utf8');
    const [payload, sig] = decoded.split('::');

    const expectedSig = crypto.createHmac("sha256", TOKEN_SECRET).update(payload).digest("hex");

    assert.strictEqual(sig, expectedSig);
  });

  test('different inputs should produce different tokens', () => {
    const token1 = generateToken('1.1.1.1', 's1', 'f1', 'a1');
    const token2 = generateToken('1.1.1.1', 's1', 'f1', 'a2');

    assert.notStrictEqual(token1, token2);
  });
});
