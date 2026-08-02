const assert = require('assert');
const test = require('node:test');
const rewire = require('rewire');
const CryptoJS = require('crypto-js');

const apiModule = rewire('./index.js');
const safeDecrypt = apiModule.__get__('safeDecrypt');

test('safeDecrypt', async (t) => {
    const secret = 'my-secret';
    const message = 'hello world';
    const encrypted = CryptoJS.AES.encrypt(message, secret).toString();

    await t.test('Happy path: valid ciphertext and secret', () => {
        assert.strictEqual(safeDecrypt(encrypted, secret), message);
    });

    await t.test('Edge case: Missing ciphertext', () => {
        assert.strictEqual(safeDecrypt(undefined, secret), '');
        assert.strictEqual(safeDecrypt(null, secret), '');
        assert.strictEqual(safeDecrypt('', secret), '');
    });

    await t.test('Edge case: Missing secret', () => {
        assert.strictEqual(safeDecrypt(encrypted, undefined), '');
        assert.strictEqual(safeDecrypt(encrypted, null), '');
        assert.strictEqual(safeDecrypt(encrypted, ''), '');
    });

    await t.test('Edge case: Invalid ciphertext (throws error in CryptoJS)', () => {
        assert.strictEqual(safeDecrypt('invalid-ciphertext', secret), '');
    });

    await t.test('Both missing', () => {
        assert.strictEqual(safeDecrypt(null, null), '');
    });
});
