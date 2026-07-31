const test = require('node:test');
const assert = require('node:assert');
const supertest = require('supertest');
const crypto = require('crypto');
const app = require('../api/index.js');

test('/api/v1/_proc endpoint testing', async (t) => {
  let agent = supertest.agent(app);
  let nonce;
  let sid;

  // Before processing the challenge, we need to request one to get a valid nonce and sid
  await t.test('Setup: Get challenge from /api/v1/_chal', async () => {
    const res = await agent.get('/api/v1/_chal');
    assert.strictEqual(res.status, 200);
    assert.ok(res.body.nonce);
    assert.ok(res.body.sid);
    nonce = res.body.nonce;
    sid = res.body.sid;
  });

  await t.test('Missing parameters should return 400', async () => {
    const res = await agent.post('/api/v1/_proc').send({});
    assert.strictEqual(res.status, 400);
    assert.strictEqual(res.body.error, 'Incomplete security context');
  });

  await t.test('Invalid or expired challenge (wrong nonce) should return 403', async () => {
    const res = await agent.post('/api/v1/_proc').send({
      nonce: 'invalid_nonce',
      hash: 'some_hash',
      fingerprint: 'test_fingerprint',
      appId: 'test_appId',
      sid: sid
    });
    assert.strictEqual(res.status, 403);
    assert.strictEqual(res.body.error, 'Challenge expired or invalid');
  });

  await t.test('Invalid or expired challenge (wrong sid) should return 403', async () => {
    const res = await agent.post('/api/v1/_proc').send({
      nonce: nonce,
      hash: 'some_hash',
      fingerprint: 'test_fingerprint',
      appId: 'test_appId',
      sid: 'invalid_sid' // Using a wrong sid
    });
    assert.strictEqual(res.status, 403);
    assert.strictEqual(res.body.error, 'Challenge expired or invalid');
  });

  await t.test('Integrity check failure (wrong PoW solution) should return 403', async () => {
    const res = await agent.post('/api/v1/_proc').send({
      nonce: nonce,
      hash: 'wrong_solution',
      fingerprint: 'test_fingerprint',
      appId: 'test_appId',
      sid: sid
    });
    assert.strictEqual(res.status, 403);
    assert.strictEqual(res.body.error, 'Integrity check failed');
  });

  await t.test('Valid PoW solution should return 200 and a token', async () => {
    // Brute force to find a correct PoW solution (difficulty is "0000")
    let solution = 0;
    let hash;
    while (true) {
      hash = crypto.createHash('sha256').update(nonce + solution.toString()).digest('hex');
      if (hash.startsWith("0000")) {
        break;
      }
      solution++;
    }

    const res = await agent.post('/api/v1/_proc').send({
      nonce: nonce,
      solution: solution.toString(),
      fingerprint: 'test_fingerprint',
      appId: 'test_appId',
      sid: sid
    });
    assert.strictEqual(res.status, 200);
    assert.ok(res.body.token);
  });

});
