const { test } = require('node:test');
const assert = require('node:assert');
const rewire = require('rewire');
const crypto = require('crypto');

const apiIndex = rewire('./index.js');
const verifyToken = apiIndex.__get__('verifyToken');
const TOKEN_SECRET = apiIndex.__get__('TOKEN_SECRET');

test('verifyToken', async (t) => {
  const ip = '127.0.0.1';
  const sessionId = 'test-session';
  const fingerprint = 'test-fp';
  const appId = 'app123';

  // Helper to generate a token manually for testing
  const generateTestToken = (ip, session, fp, app, expires) => {
    const payload = `${ip}|${session}|${fp}|${app}|${expires}`;
    const sig = crypto.createHmac("sha256", TOKEN_SECRET).update(payload).digest("hex");
    return Buffer.from(`${payload}::${sig}`).toString("base64url");
  };

  await t.test('returns true for a valid token', () => {
    const expires = Math.floor(Date.now() / 1000) + 1800; // 30 mins in future
    const token = generateTestToken(ip, sessionId, fingerprint, appId, expires);
    const result = verifyToken(token, ip, sessionId, fingerprint, appId);
    assert.strictEqual(result, true);
  });

  await t.test('returns false for an expired token', () => {
    const expires = Math.floor(Date.now() / 1000) - 1800; // 30 mins in past
    const token = generateTestToken(ip, sessionId, fingerprint, appId, expires);
    const result = verifyToken(token, ip, sessionId, fingerprint, appId);
    assert.strictEqual(result, false);
  });

  await t.test('returns false for a mismatched appId', () => {
    const expires = Math.floor(Date.now() / 1000) + 1800;
    const token = generateTestToken(ip, sessionId, fingerprint, 'differentAppId', expires);
    const result = verifyToken(token, ip, sessionId, fingerprint, appId);
    assert.strictEqual(result, false);
  });

  await t.test('returns false for tampered payload', () => {
    const expires = Math.floor(Date.now() / 1000) + 1800;
    const validToken = generateTestToken(ip, sessionId, fingerprint, appId, expires);

    // Tamper with the token string directly
    const raw = Buffer.from(validToken, "base64url").toString("utf8");
    const [payload, sig] = raw.split("::");

    // Change appId in payload to try to bypass check
    const tamperedPayload = payload.replace(appId, 'differentAppId');
    const tamperedToken = Buffer.from(`${tamperedPayload}::${sig}`).toString("base64url");

    // verification with the differentAppId should fail because signature doesn't match
    const result = verifyToken(tamperedToken, ip, sessionId, fingerprint, 'differentAppId');
    assert.strictEqual(result, false);
  });

  await t.test('returns false for a malformed token (not enough parts in payload)', () => {
    const payload = `${ip}|${sessionId}|${fingerprint}|${appId}`; // missing expires
    const sig = crypto.createHmac("sha256", TOKEN_SECRET).update(payload).digest("hex");
    const token = Buffer.from(`${payload}::${sig}`).toString("base64url");

    const result = verifyToken(token, ip, sessionId, fingerprint, appId);
    assert.strictEqual(result, false);
  });

  await t.test('returns false for a malformed token (no signature part)', () => {
    const token = Buffer.from("just-some-payload-without-signature").toString("base64url");
    const result = verifyToken(token, ip, sessionId, fingerprint, appId);
    assert.strictEqual(result, false);
  });

  await t.test('returns false for invalid base64url', () => {
    // This is valid base64 but might fail base64url decoding cleanly if it has chars not in url safe set,
    // or just generally invalid input. We'll pass plain text instead of base64url.
    const result = verifyToken("not-base64url-at-all!!", ip, sessionId, fingerprint, appId);
    assert.strictEqual(result, false);
  });
});
