import { describe, it } from 'node:test';
import * as assert from 'node:assert';
import { cn } from './utilsPublic';

describe('utilsPublic', () => {
  describe('cn', () => {
    it('should join valid string inputs with spaces', () => {
      assert.strictEqual(cn('class1', 'class2', 'class3'), 'class1 class2 class3');
    });

    it('should ignore falsey inputs', () => {
      assert.strictEqual(cn('class1', null, undefined, '', false, 0, 'class2'), 'class1 class2');
    });

    it('should handle conditional logic', () => {
      const isTrue = true;
      const isFalse = false;
      assert.strictEqual(cn('base-class', isTrue && 'active', isFalse && 'inactive'), 'base-class active');
    });

    it('should handle single input', () => {
      assert.strictEqual(cn('single-class'), 'single-class');
    });

    it('should return empty string for all falsey inputs', () => {
      assert.strictEqual(cn(null, undefined, false, '', 0), '');
    });
  });
});
