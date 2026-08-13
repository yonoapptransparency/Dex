import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { safeVibrate } from '../utilsPublic';

describe('safeVibrate', () => {
  let originalNavigator: any;

  beforeEach(() => {
    vi.useFakeTimers();
    originalNavigator = window.navigator;
  });

  afterEach(() => {
    vi.useRealTimers();
    vi.restoreAllMocks();
    Object.defineProperty(window, 'navigator', {
      value: originalNavigator,
      writable: true,
      configurable: true
    });
  });

  it('should call navigator.vibrate if available', () => {
    const vibrateMock = vi.fn();
    Object.defineProperty(window, 'navigator', {
      value: { vibrate: vibrateMock },
      writable: true,
      configurable: true
    });

    safeVibrate(200);
    vi.runAllTimers();

    expect(vibrateMock).toHaveBeenCalledWith(200);
  });

  it('should not throw if navigator.vibrate throws inside setTimeout', () => {
    const vibrateMock = vi.fn().mockImplementation(() => {
      throw new Error('Vibrate failed');
    });
    Object.defineProperty(window, 'navigator', {
      value: { vibrate: vibrateMock },
      writable: true,
      configurable: true
    });

    expect(() => {
      safeVibrate([100, 200]);
      vi.runAllTimers();
    }).not.toThrow();

    expect(vibrateMock).toHaveBeenCalledWith([100, 200]);
  });

  it('should not throw if accessing navigator throws (outer try-catch)', () => {
    Object.defineProperty(window, 'navigator', {
      get: () => {
        throw new Error('Security Error');
      },
      configurable: true
    });

    expect(() => {
      safeVibrate(200);
    }).not.toThrow();
  });

  it('should do nothing if navigator.vibrate is not a function', () => {
    Object.defineProperty(window, 'navigator', {
      value: { vibrate: null },
      writable: true,
      configurable: true
    });

    expect(() => {
      safeVibrate(200);
      vi.runAllTimers();
    }).not.toThrow();
  });

  it('should do nothing if navigator is undefined', () => {
    Object.defineProperty(window, 'navigator', {
      value: undefined,
      writable: true,
      configurable: true
    });

    expect(() => {
      safeVibrate(200);
      vi.runAllTimers();
    }).not.toThrow();
  });
});
