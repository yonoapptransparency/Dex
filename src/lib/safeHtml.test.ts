import { describe, it } from 'node:test';
import * as assert from 'node:assert';
import { safeHtml } from './safeHtml';

describe('safeHtml', () => {
  it('returns default fallback for falsy values', () => {
    assert.strictEqual(safeHtml(null), '');
    assert.strictEqual(safeHtml(undefined), '');
    assert.strictEqual(safeHtml(false), '');
    assert.strictEqual(safeHtml(0), '');
    assert.strictEqual(safeHtml(''), '');
  });

  it('returns custom fallback for falsy values', () => {
    assert.strictEqual(safeHtml(null, 'default'), 'default');
    assert.strictEqual(safeHtml(undefined, 'default'), 'default');
    assert.strictEqual(safeHtml('', 'default'), 'default');
  });

  it('handles plain string correctly', () => {
    assert.strictEqual(safeHtml('hello'), 'hello');
  });

  it('preserves safe HTML', () => {
    assert.strictEqual(safeHtml('<b>hello</b>'), '<b>hello</b>');
    assert.strictEqual(safeHtml('<p>Test <span>string</span></p>'), '<p>Test <span>string</span></p>');
  });

  it('sanitizes malicious HTML', () => {
    assert.strictEqual(safeHtml('<script>alert("xss")</script>hello'), 'hello');
    assert.strictEqual(safeHtml('hello <img src="x" onerror="alert(1)">'), 'hello <img src="x">');
    assert.strictEqual(safeHtml('<a href="javascript:alert(1)">link</a>'), '<a>link</a>');
  });

  it('handles object with stringValue', () => {
    assert.strictEqual(safeHtml({ stringValue: 'hello' }), 'hello');
  });

  it('sanitizes object with malicious stringValue', () => {
    assert.strictEqual(safeHtml({ stringValue: '<script>alert(1)</script>hello' }), 'hello');
  });

  it('uses fallback when stringValue is empty', () => {
    assert.strictEqual(safeHtml({ stringValue: '' }, 'default'), 'default');
  });

  it('handles other truthy values by converting to string', () => {
    assert.strictEqual(safeHtml(123), '123');
    assert.strictEqual(safeHtml(true), 'true');
    assert.strictEqual(safeHtml({}), '[object Object]');
    assert.strictEqual(safeHtml([1, 2]), '1,2');
  });

  it('returns raw string when DOMPurify throws an error (current behavior)', async () => {
    const DOMPurify = await import('isomorphic-dompurify');
    const originalSanitize = DOMPurify.default.sanitize;
    DOMPurify.default.sanitize = () => { throw new Error('Mock error'); };

    assert.strictEqual(safeHtml('test string', 'fallback'), 'test string');

    DOMPurify.default.sanitize = originalSanitize;
  });
});
