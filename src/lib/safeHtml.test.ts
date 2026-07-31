import test from 'node:test';
import assert from 'node:assert';
import { safeHtml } from './safeHtml';

test('safeHtml', async (t) => {
  await t.test('returns fallback for falsy values', () => {
    assert.strictEqual(safeHtml(undefined), '');
    assert.strictEqual(safeHtml(null), '');
    assert.strictEqual(safeHtml(''), '');
    assert.strictEqual(safeHtml(false), '');
    assert.strictEqual(safeHtml(0), '');

    assert.strictEqual(safeHtml(undefined, 'fallback'), 'fallback');
    assert.strictEqual(safeHtml(null, 'fallback'), 'fallback');
  });

  await t.test('preserves safe HTML', () => {
    assert.strictEqual(safeHtml('<p>Hello <b>World</b>!</p>'), '<p>Hello <b>World</b>!</p>');
    assert.strictEqual(safeHtml('<a href="https://example.com">Link</a>'), '<a href="https://example.com">Link</a>');
  });

  await t.test('sanitizes unsafe HTML', () => {
    assert.strictEqual(safeHtml('<script>alert("XSS")</script>'), '');
    assert.strictEqual(safeHtml('<img src="x" onerror="alert(\'XSS\')">'), '<img src="x">');
    assert.strictEqual(safeHtml('<a href="javascript:alert(1)">Link</a>'), '<a>Link</a>');
  });

  await t.test('extracts stringValue from objects', () => {
    assert.strictEqual(safeHtml({ stringValue: 'hello' }), 'hello');
    assert.strictEqual(safeHtml({ stringValue: '<script>alert()</script>safe' }), 'safe');

    // fallback test for stringValue
    assert.strictEqual(safeHtml({ stringValue: '' }, 'fallback'), 'fallback');
    // For stringValue missing but it's empty, actually the check is `val.stringValue || fallback`.
    assert.strictEqual(safeHtml({ stringValue: '' }), '');
  });

  await t.test('converts other objects or primitive types to string', () => {
    assert.strictEqual(safeHtml(123), '123');
    assert.strictEqual(safeHtml(true), 'true');
    assert.strictEqual(safeHtml(['a', 'b']), 'a,b');
  });
});
