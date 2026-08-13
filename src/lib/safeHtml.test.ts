import { test, describe } from 'node:test';
import * as assert from 'node:assert/strict';
import { safeHtml } from './safeHtml';

describe('safeHtml', () => {
  test('returns fallback for falsy values', () => {
    assert.equal(safeHtml(undefined, 'fallback-val'), 'fallback-val');
    assert.equal(safeHtml(null, 'fallback-val'), 'fallback-val');
    assert.equal(safeHtml('', 'fallback-val'), 'fallback-val');
    assert.equal(safeHtml(0, 'fallback-val'), 'fallback-val');
    assert.equal(safeHtml(false, 'fallback-val'), 'fallback-val');
  });

  test('returns empty string if no fallback provided for falsy values', () => {
    assert.equal(safeHtml(undefined), '');
    assert.equal(safeHtml(null), '');
    assert.equal(safeHtml(''), '');
  });

  test('handles object with stringValue', () => {
    assert.equal(safeHtml({ stringValue: 'hello' }), '<h2>hello</h2>');
    assert.equal(safeHtml({ stringValue: '' }, 'fallback-val'), '<h2>fallback-val</h2>'); // It processes the fallback through DOMPurify too since it's converted to string
  });

  test('handles object without stringValue by stringifying', () => {
    assert.equal(safeHtml({ foo: 'bar' }), '<h2>[object Object]</h2>');
    assert.equal(safeHtml([1, 2, 3]), '<h2>1,2,3</h2>');
  });

  test('handles plain strings', () => {
    assert.equal(safeHtml('hello world'), '<h2>hello world</h2>');
    assert.equal(safeHtml('this is a very long string that should not be converted to a heading because it is longer than 75 characters long which is the threshold for subheadings.'), '<p>this is a very long string that should not be converted to a heading because it is longer than 75 characters long which is the threshold for subheadings.</p>');
    assert.equal(safeHtml('hello <script>alert(1)</script> world'), '<h2>hello  world</h2>');
  });
});
