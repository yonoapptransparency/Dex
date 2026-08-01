import { test, describe, beforeEach, afterEach } from 'node:test';
import assert from 'node:assert';
import { sessionStore } from '../src/lib/sessionStore';

describe('sessionStore', () => {
  let originalWindow: any;

  beforeEach(() => {
    // Save original window
    originalWindow = global.window;
  });

  afterEach(() => {
    // Restore original window
    global.window = originalWindow;
  });

  describe('getItem', () => {
    test('returns null when window is undefined', () => {
      // Temporarily remove window
      global.window = undefined as any;
      const result = sessionStore.getItem('testKey');
      assert.strictEqual(result, null);
    });

    test('returns the item from sessionStorage', () => {
      // Mock window and sessionStorage
      global.window = {} as any;
      const mockSessionStorage = {
        getItem: (key: string) => key === 'testKey' ? 'testValue' : null
      };
      (global as any).sessionStorage = mockSessionStorage;

      const result = sessionStore.getItem('testKey');
      assert.strictEqual(result, 'testValue');

      const nullResult = sessionStore.getItem('nonExistentKey');
      assert.strictEqual(nullResult, null);

      // Clean up
      delete (global as any).sessionStorage;
    });

    test('returns null when sessionStorage.getItem throws an error', () => {
      // Mock window and sessionStorage that throws
      global.window = {} as any;
      const mockSessionStorage = {
        getItem: () => { throw new Error('Access denied'); }
      };
      (global as any).sessionStorage = mockSessionStorage;

      const result = sessionStore.getItem('testKey');
      assert.strictEqual(result, null);

      // Clean up
      delete (global as any).sessionStorage;
    });
  });

  describe('setItem', () => {
    test('does nothing when window is undefined', () => {
      global.window = undefined as any;
      // Should not throw
      sessionStore.setItem('testKey', 'testValue');
    });

    test('sets the item in sessionStorage', () => {
      global.window = {} as any;
      let setKey = '';
      let setValue = '';
      const mockSessionStorage = {
        setItem: (key: string, value: string) => {
          setKey = key;
          setValue = value;
        }
      };
      (global as any).sessionStorage = mockSessionStorage;

      sessionStore.setItem('testKey', 'testValue');
      assert.strictEqual(setKey, 'testKey');
      assert.strictEqual(setValue, 'testValue');

      delete (global as any).sessionStorage;
    });

    test('handles errors silently', () => {
      global.window = {} as any;
      const mockSessionStorage = {
        setItem: () => { throw new Error('Quota exceeded'); }
      };
      (global as any).sessionStorage = mockSessionStorage;

      // Should not throw
      sessionStore.setItem('testKey', 'testValue');

      delete (global as any).sessionStorage;
    });
  });

  describe('removeItem', () => {
    test('does nothing when window is undefined', () => {
      global.window = undefined as any;
      // Should not throw
      sessionStore.removeItem('testKey');
    });

    test('removes the item from sessionStorage', () => {
      global.window = {} as any;
      let removedKey = '';
      const mockSessionStorage = {
        removeItem: (key: string) => {
          removedKey = key;
        }
      };
      (global as any).sessionStorage = mockSessionStorage;

      sessionStore.removeItem('testKey');
      assert.strictEqual(removedKey, 'testKey');

      delete (global as any).sessionStorage;
    });

    test('handles errors silently', () => {
      global.window = {} as any;
      const mockSessionStorage = {
        removeItem: () => { throw new Error('Access denied'); }
      };
      (global as any).sessionStorage = mockSessionStorage;

      // Should not throw
      sessionStore.removeItem('testKey');

      delete (global as any).sessionStorage;
    });
  });

  describe('clear', () => {
    test('does nothing when window is undefined', () => {
      global.window = undefined as any;
      // Should not throw
      sessionStore.clear();
    });

    test('clears sessionStorage', () => {
      global.window = {} as any;
      let cleared = false;
      const mockSessionStorage = {
        clear: () => {
          cleared = true;
        }
      };
      (global as any).sessionStorage = mockSessionStorage;

      sessionStore.clear();
      assert.strictEqual(cleared, true);

      delete (global as any).sessionStorage;
    });

    test('handles errors silently', () => {
      global.window = {} as any;
      const mockSessionStorage = {
        clear: () => { throw new Error('Access denied'); }
      };
      (global as any).sessionStorage = mockSessionStorage;

      // Should not throw
      sessionStore.clear();

      delete (global as any).sessionStorage;
    });
  });
});
