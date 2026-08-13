import { renderHook, act } from '@testing-library/react';
import { useScrollDirection } from './useScrollDirection';
import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest';

describe('useScrollDirection', () => {
  let originalScrollY: number;

  beforeEach(() => {
    originalScrollY = window.scrollY;
  });

  afterEach(() => {
    Object.defineProperty(window, 'scrollY', { value: originalScrollY, writable: true, configurable: true });
    vi.restoreAllMocks();
  });

  it('should initialize with direction top and scrolled false', () => {
    const { result } = renderHook(() => useScrollDirection());

    expect(result.current.scrollDirection).toBe('top');
    expect(result.current.scrolled).toBe(false);
  });

  it('should update state when scrolling down', () => {
    vi.useFakeTimers();

    const { result } = renderHook(() => useScrollDirection());

    act(() => {
      Object.defineProperty(window, 'scrollY', { value: 50, writable: true, configurable: true });
      window.dispatchEvent(new Event('scroll'));
      vi.runAllTimers();
    });

    expect(result.current.scrolled).toBe(true);
    expect(result.current.scrollDirection).toBe('down');

    vi.useRealTimers();
  });

  it('should not update direction if scroll diff is less than 8px', () => {
    vi.useFakeTimers();

    const { result } = renderHook(() => useScrollDirection());

    act(() => {
      Object.defineProperty(window, 'scrollY', { value: 30, writable: true, configurable: true });
      window.dispatchEvent(new Event('scroll'));
      vi.runAllTimers();
    });

    expect(result.current.scrollDirection).toBe('down');

    act(() => {
      // scroll back up slightly, diff = -5 (less than threshold of 8)
      Object.defineProperty(window, 'scrollY', { value: 25, writable: true, configurable: true });
      window.dispatchEvent(new Event('scroll'));
      vi.runAllTimers();
    });

    // Direction should still be down
    expect(result.current.scrollDirection).toBe('down');

    vi.useRealTimers();
  });

  it('should update state when scrolling up', () => {
    vi.useFakeTimers();

    const { result } = renderHook(() => useScrollDirection());

    act(() => {
      Object.defineProperty(window, 'scrollY', { value: 100, writable: true, configurable: true });
      window.dispatchEvent(new Event('scroll'));
      vi.runAllTimers();
    });

    expect(result.current.scrollDirection).toBe('down');

    act(() => {
      Object.defineProperty(window, 'scrollY', { value: 50, writable: true, configurable: true }); // scrolled up more than 8px
      window.dispatchEvent(new Event('scroll'));
      vi.runAllTimers();
    });

    expect(result.current.scrollDirection).toBe('up');

    vi.useRealTimers();
  });

  it('should reset to top when scrolling back to top (scrollY <= 20)', () => {
    vi.useFakeTimers();

    const { result } = renderHook(() => useScrollDirection());

    act(() => {
      Object.defineProperty(window, 'scrollY', { value: 100, writable: true, configurable: true });
      window.dispatchEvent(new Event('scroll'));
      vi.runAllTimers();
    });

    expect(result.current.scrollDirection).toBe('down');
    expect(result.current.scrolled).toBe(true);

    act(() => {
      Object.defineProperty(window, 'scrollY', { value: 15, writable: true, configurable: true }); // less than or equal to 20
      window.dispatchEvent(new Event('scroll'));
      vi.runAllTimers();
    });

    expect(result.current.scrollDirection).toBe('top');
    expect(result.current.scrolled).toBe(false);

    vi.useRealTimers();
  });

  it('should handle removing event listeners on unmount', () => {
    const removeEventListenerSpy = vi.spyOn(window, 'removeEventListener');

    const { unmount } = renderHook(() => useScrollDirection());

    unmount();

    expect(removeEventListenerSpy).toHaveBeenCalledWith('scroll', expect.any(Function));
  });
});
