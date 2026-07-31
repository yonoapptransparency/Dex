import { test, describe, beforeEach, afterEach } from 'node:test';
import * as assert from 'node:assert';
import { sessionStore } from './sessionStore';

describe('sessionStore', () => {
  let originalWindow: any;
  let originalSessionStorage: any;

  beforeEach(() => {
    // Save original globals
    originalWindow = (global as any).window;
    originalSessionStorage = (global as any).sessionStorage;
  });

  afterEach(() => {
    // Restore original globals
    (global as any).window = originalWindow;
    (global as any).sessionStorage = originalSessionStorage;
  });

  describe('when window is undefined (SSR)', () => {
    beforeEach(() => {
      delete (global as any).window;
      delete (global as any).sessionStorage;
    });

    test('getItem returns null', () => {
      assert.strictEqual(sessionStore.getItem('key'), null);
    });

    test('setItem does not throw', () => {
      assert.doesNotThrow(() => sessionStore.setItem('key', 'value'));
    });

    test('removeItem does not throw', () => {
      assert.doesNotThrow(() => sessionStore.removeItem('key'));
    });

    test('clear does not throw', () => {
      assert.doesNotThrow(() => sessionStore.clear());
    });
  });

  describe('when window is defined', () => {
    beforeEach(() => {
      (global as any).window = {};
    });

    describe('when sessionStorage methods succeed', () => {
      let store: Record<string, string>;

      beforeEach(() => {
        store = {};
        (global as any).sessionStorage = {
          getItem: (key: string) => store[key] || null,
          setItem: (key: string, value: string) => { store[key] = value; },
          removeItem: (key: string) => { delete store[key]; },
          clear: () => { store = {}; }
        };
      });

      test('getItem retrieves value', () => {
        (global as any).sessionStorage.setItem('testKey', 'testValue');
        assert.strictEqual(sessionStore.getItem('testKey'), 'testValue');
      });

      test('getItem returns null for missing key', () => {
        assert.strictEqual(sessionStore.getItem('missingKey'), null);
      });

      test('setItem sets value', () => {
        sessionStore.setItem('newKey', 'newValue');
        assert.strictEqual((global as any).sessionStorage.getItem('newKey'), 'newValue');
      });

      test('removeItem removes value', () => {
        (global as any).sessionStorage.setItem('keyToRemove', 'value');
        sessionStore.removeItem('keyToRemove');
        assert.strictEqual((global as any).sessionStorage.getItem('keyToRemove'), null);
      });

      test('clear removes all values', () => {
        (global as any).sessionStorage.setItem('key1', 'val1');
        (global as any).sessionStorage.setItem('key2', 'val2');
        sessionStore.clear();
        assert.strictEqual((global as any).sessionStorage.getItem('key1'), null);
        assert.strictEqual((global as any).sessionStorage.getItem('key2'), null);
      });
    });

    describe('when sessionStorage methods throw errors (e.g. storage disabled)', () => {
      beforeEach(() => {
        (global as any).sessionStorage = {
          getItem: () => { throw new Error('Access denied'); },
          setItem: () => { throw new Error('Quota exceeded'); },
          removeItem: () => { throw new Error('Access denied'); },
          clear: () => { throw new Error('Access denied'); }
        };
      });

      test('getItem catches error and returns null', () => {
        assert.strictEqual(sessionStore.getItem('key'), null);
      });

      test('setItem catches error and does not throw', () => {
        assert.doesNotThrow(() => sessionStore.setItem('key', 'value'));
      });

      test('removeItem catches error and does not throw', () => {
        assert.doesNotThrow(() => sessionStore.removeItem('key'));
      });

      test('clear catches error and does not throw', () => {
        assert.doesNotThrow(() => sessionStore.clear());
      });
    });
  });
});
