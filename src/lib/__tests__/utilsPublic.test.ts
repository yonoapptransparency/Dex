import { describe, it, expect } from 'vitest';
import { cn } from '../utilsPublic';

describe('cn utility function', () => {
  it('should join basic string classes', () => {
    expect(cn('class1', 'class2', 'class3')).toBe('class1 class2 class3');
  });

  it('should ignore undefined and null values', () => {
    expect(cn('class1', undefined, 'class2', null, 'class3')).toBe('class1 class2 class3');
  });

  it('should ignore empty strings', () => {
    expect(cn('class1', '', 'class2', '', 'class3')).toBe('class1 class2 class3');
  });

  it('should ignore boolean false values', () => {
    expect(cn('class1', false, 'class2', false && 'hidden', 'class3')).toBe('class1 class2 class3');
  });

  it('should include conditional boolean true values', () => {
    expect(cn('class1', true && 'visible', 'class2')).toBe('class1 visible class2');
  });

  it('should handle zero gracefully (treated as string if passed as number or converted)', () => {
    // Note: inputs.filter(Boolean) will filter out 0.
    // Testing the current behavior of the function.
    expect(cn('class1', 0, 'class2')).toBe('class1 class2');
  });

  it('should handle arrays of classes passed via spread', () => {
    const classes = ['class2', 'class3'];
    expect(cn('class1', ...classes)).toBe('class1 class2 class3');
  });

  it('should return empty string when no arguments are passed', () => {
    expect(cn()).toBe('');
  });

  it('should return empty string when only falsy arguments are passed', () => {
    expect(cn(false, null, undefined, '', 0)).toBe('');
  });
});
