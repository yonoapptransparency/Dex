const test = require('node:test');
const assert = require('node:assert');
const request = require('supertest');
const app = require('../index.js'); // Assuming api/index.js exports the express app

test('GET /api/v1/_chal integration test', async (t) => {
  await t.test('returns nonce, difficulty, and sid, and sets __Host-sid cookie', async () => {
    const response = await request(app)
      .get('/api/v1/_chal')
      .expect('Content-Type', /json/)
      .expect(200);

    const body = response.body;

    // Verify response body fields
    assert.ok(body.nonce, 'Response should contain a nonce');
    assert.strictEqual(typeof body.nonce, 'string');
    assert.strictEqual(body.nonce.length, 32); // crypto.randomBytes(16).toString('hex') is 32 chars

    assert.strictEqual(body.difficulty, '0000', 'Response should contain difficulty 0000');

    assert.ok(body.sid, 'Response should contain a sid');
    assert.strictEqual(typeof body.sid, 'string');

    // Verify cookie
    const cookies = response.headers['set-cookie'];
    assert.ok(cookies, 'Response should set cookies');
    assert.ok(cookies.length > 0, 'Should have at least one set-cookie header');

    const sidCookie = cookies.find(c => c.startsWith('__Host-sid='));
    assert.ok(sidCookie, '__Host-sid cookie should be set');
    assert.ok(sidCookie.includes('HttpOnly'), 'Cookie should be HttpOnly');
    assert.ok(sidCookie.includes('Secure'), 'Cookie should be Secure');
    assert.ok(sidCookie.includes('SameSite=Lax'), 'Cookie should be SameSite=Lax');

    // Verify sid matches
    const cookieValueMatch = sidCookie.match(/__Host-sid=([^;]+)/);
    assert.ok(cookieValueMatch, 'Could not extract cookie value');
    assert.strictEqual(cookieValueMatch[1], body.sid, 'Cookie value should match body sid');
  });

  await t.test('uses existing __Host-sid cookie if provided', async () => {
    const existingSid = 'test-existing-sid-12345';
    const response = await request(app)
      .get('/api/v1/_chal')
      .set('Cookie', `__Host-sid=${existingSid}`)
      .expect('Content-Type', /json/)
      .expect(200);

    const body = response.body;

    assert.strictEqual(body.sid, existingSid, 'Should reuse existing sid from cookie');

    // Express won't set-cookie if we provided one and our ensureSession logic doesn't re-set it
    // when it already exists
    const cookies = response.headers['set-cookie'];
    assert.ok(!cookies, 'Should not set a new cookie when one is provided');
  });
});
