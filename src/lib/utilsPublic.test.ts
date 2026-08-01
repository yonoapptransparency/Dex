import { describe, it, mock, beforeEach, afterEach } from 'node:test';
import * as assert from 'node:assert';
import { safeVibrate } from './utilsPublic';

describe('safeVibrate', () => {
    let originalWindow: any;

    beforeEach(() => {
        originalWindow = (global as any).window;
    });

    afterEach(() => {
        (global as any).window = originalWindow;
    });

    it('does not throw when window is undefined', () => {
        (global as any).window = undefined;
        assert.doesNotThrow(() => safeVibrate(200));
    });

    it('calls window.navigator.vibrate when available', () => {
        const vibrateMock = mock.fn();
        (global as any).window = {
            navigator: {
                vibrate: vibrateMock
            }
        };

        safeVibrate(200);
        assert.strictEqual(vibrateMock.mock.calls.length, 1);
        assert.deepStrictEqual(vibrateMock.mock.calls[0].arguments, [200]);
    });

    it('catches and swallows errors thrown by window.navigator.vibrate', () => {
        const vibrateMock = mock.fn(() => {
            throw new Error('Security Error');
        });
        (global as any).window = {
            navigator: {
                vibrate: vibrateMock
            }
        };

        assert.doesNotThrow(() => safeVibrate(200));
        assert.strictEqual(vibrateMock.mock.calls.length, 1);
    });
});
