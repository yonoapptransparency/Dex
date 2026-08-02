import { describe, it, beforeEach, afterEach } from 'node:test';
import assert from 'node:assert/strict';
import { cn, safeVibrate, getAdminPath } from './utilsPublic.js';

describe('utilsPublic', () => {
  describe('cn()', () => {
    it('should join multiple class names', () => {
      assert.equal(cn('a', 'b', 'c'), 'a b c');
    });

    it('should filter out falsy values', () => {
      assert.equal(cn('a', null, 'b', undefined, 'c', false, '', 0, 'd'), 'a b c d');
    });

    it('should handle no arguments', () => {
      assert.equal(cn(), '');
    });

    it('should handle an array of falsy values', () => {
      assert.equal(cn(null, undefined, false, '', 0), '');
    });
  });

  describe('safeVibrate()', () => {
    let originalWindow: any;

    beforeEach(() => {
      originalWindow = global.window;
    });

    afterEach(() => {
      global.window = originalWindow;
    });

    it('should not throw if window is undefined', () => {
      // @ts-ignore
      delete global.window;
      assert.doesNotThrow(() => safeVibrate(100));
    });

    it('should not throw if window.navigator is undefined', () => {
      // @ts-ignore
      global.window = {};
      assert.doesNotThrow(() => safeVibrate(100));
    });

    it('should not throw if window.navigator.vibrate is undefined', () => {
      // @ts-ignore
      global.window = { navigator: {} };
      assert.doesNotThrow(() => safeVibrate(100));
    });

    it('should call window.navigator.vibrate if it exists', () => {
      let calledPattern: number | number[] | null = null;
      // @ts-ignore
      global.window = {
        navigator: {
          vibrate: (pattern: number | number[]) => {
            calledPattern = pattern;
          },
        },
      };

      safeVibrate(200);
      assert.equal(calledPattern, 200);

      safeVibrate([100, 50, 100]);
      assert.deepEqual(calledPattern, [100, 50, 100]);
    });

    it('should catch exceptions silently', () => {
      // @ts-ignore
      global.window = {
        navigator: {
          vibrate: () => {
            throw new Error('Security Error');
          },
        },
      };

      assert.doesNotThrow(() => safeVibrate(100));
    });
  });

  describe('getAdminPath()', () => {
    let originalEnv: any;

    beforeEach(() => {
      originalEnv = { ...process.env };
    });

    afterEach(() => {
      process.env = { ...originalEnv };
    });

    it('should return process.env.ADMIN_PATH if set', () => {
      process.env.ADMIN_PATH = 'custom-admin-path';
      assert.equal(getAdminPath(), 'custom-admin-path');
    });

    it('should return process.env.VITE_ADMIN_PATH if ADMIN_PATH is not set', () => {
      delete process.env.ADMIN_PATH;
      process.env.VITE_ADMIN_PATH = 'vite-admin-path';
      assert.equal(getAdminPath(), 'vite-admin-path');
    });

    it('should fall back to "admin" if no env vars are set', () => {
      delete process.env.ADMIN_PATH;
      delete process.env.VITE_ADMIN_PATH;
      assert.equal(getAdminPath(), 'admin');
    });

    // Note: It is hard to reliably mock import.meta.env in standard Node.js test environments
    // without a specialized loader/transformer (like vitest/jest with vite plugin).
    // We cover the basic process.env functionality here.
  });
});
