import test from 'node:test';
import assert from 'node:assert';
import quibble from 'quibble';

test('safeHtml handles DOMPurify errors gracefully', async (t) => {
    // Mock the DOMPurify module to simulate an error during sanitization
    await quibble('isomorphic-dompurify', {
        sanitize: () => { throw new Error('Simulated DOMPurify error') },
        default: { sanitize: () => { throw new Error('Simulated DOMPurify error') } }
    });

    // We must use require to ensure we get the patched module synchronously in tsx/node setup
    const { safeHtml } = require('../src/lib/safeHtml.ts');

    let warnCalled = false;
    let actualWarningMessage = '';
    const origWarn = console.warn;

    console.warn = (msg, err) => {
        if (msg === "DOMPurify sanitization fallback:" && err.message === 'Simulated DOMPurify error') {
            warnCalled = true;
        } else {
            actualWarningMessage = msg;
        }
    };

    try {
        const inputString = '<script>alert("XSS")</script>test';
        // When error occurs, it should return the original string fallback
        const result = safeHtml(inputString);

        assert.strictEqual(warnCalled, true, `Warning was not called properly. Got: ${actualWarningMessage}`);
        assert.strictEqual(result, inputString, 'Should return the raw string on error');

    } finally {
        console.warn = origWarn;
        await quibble.reset();
        delete require.cache[require.resolve('../src/lib/safeHtml.ts')];
    }
});

test('safeHtml sanitizes correctly in happy path', async (t) => {
    // Clean import of the unmocked module
    const { safeHtml } = require('../src/lib/safeHtml.ts');
    const result = safeHtml('<script>alert("xss")</script><b>bold</b>');
    assert.strictEqual(result, '<b>bold</b>');
});

test('safeHtml handles object stringValue input', async (t) => {
    const { safeHtml } = require('../src/lib/safeHtml.ts');
    const result = safeHtml({ stringValue: '<b>bold</b>' });
    assert.strictEqual(result, '<b>bold</b>');
});

test('safeHtml handles missing stringValue fallback', async (t) => {
    const { safeHtml } = require('../src/lib/safeHtml.ts');
    // If an object is missing 'stringValue' but is passed, safeHtml drops into the `else` block `String(val)`
    const result = safeHtml({ toString: () => 'custom string' }, 'fallback');
    assert.strictEqual(result, 'custom string');
});

test('safeHtml handles non-string object input fallback', async (t) => {
    const { safeHtml } = require('../src/lib/safeHtml.ts');
    const result = safeHtml(123);
    assert.strictEqual(result, '123');
});

test('safeHtml returns fallback on empty val', async (t) => {
    const { safeHtml } = require('../src/lib/safeHtml.ts');
    const result = safeHtml(null, 'defaultFallback');
    assert.strictEqual(result, 'defaultFallback');
});
