import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { getAdminPath } from './utilsPublic';

describe('getAdminPath', () => {
  const originalProcess = global.process;

  beforeEach(() => {
    vi.resetModules();
    vi.unstubAllEnvs();
  });

  afterEach(() => {
    vi.unstubAllEnvs();
    global.process = originalProcess;
  });

  it('should return process.env.ADMIN_PATH if set and no VITE_ADMIN_PATH is present', () => {
    vi.stubEnv('ADMIN_PATH', 'custom-admin');
    // Ensure VITE_ADMIN_PATH is undefined to avoid it overwriting via import.meta.env
    vi.stubEnv('VITE_ADMIN_PATH', '');
    expect(getAdminPath()).toBe('custom-admin');
  });

  it('should return process.env.VITE_ADMIN_PATH if ADMIN_PATH is not set', () => {
    vi.stubEnv('ADMIN_PATH', '');
    vi.stubEnv('VITE_ADMIN_PATH', 'vite-admin');
    expect(getAdminPath()).toBe('vite-admin');
  });

  it('should return import.meta.env.VITE_ADMIN_PATH which overwrites process.env.ADMIN_PATH', () => {
    vi.stubEnv('ADMIN_PATH', 'primary-admin');
    // Vitest syncs process.env with import.meta.env.
    // Setting VITE_ADMIN_PATH here simulates import.meta.env.VITE_ADMIN_PATH being present,
    // which the function design currently allows to overwrite process.env.ADMIN_PATH.
    vi.stubEnv('VITE_ADMIN_PATH', 'secondary-admin');
    expect(getAdminPath()).toBe('secondary-admin');
  });

  it('should fallback to "admin" if no env vars are set', () => {
    vi.stubEnv('ADMIN_PATH', '');
    vi.stubEnv('VITE_ADMIN_PATH', '');
    expect(getAdminPath()).toBe('admin');
  });
});
