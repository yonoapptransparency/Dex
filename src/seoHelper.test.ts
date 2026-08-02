import { test } from 'node:test';
import assert from 'node:assert';
import { clearSeoCache, fetchStoreData } from './seoHelper.js';

test('clearSeoCache resets cache and forces new fetch', async (t) => {
  // We mock the fetch global to prevent real network calls.
  const originalFetch = globalThis.fetch;
  let fetchCallCount = 0;

  globalThis.fetch = async (url) => {
    fetchCallCount++;
    return {
      ok: true,
      json: async () => ({ documents: [] }),
      text: async () => "{}"
    } as any;
  };

  try {
    // First fetch to populate cache
    const data1 = await fetchStoreData();

    // Second fetch should return the exact same object reference if cache is hit
    const data2 = await fetchStoreData();
    assert.strictEqual(data1, data2, 'Cache hit should return identical object reference');

    // Clear the cache
    clearSeoCache();

    // Third fetch should return a new object reference because cache was cleared
    const data3 = await fetchStoreData();
    assert.notStrictEqual(data1, data3, 'Cache miss should return new object reference');

    // We can assert fetch was called at least 5 times (5 urls per sync) * 2 syncs
    assert.ok(fetchCallCount >= 10, 'Fetch should be called multiple times during syncs');
  } finally {
    // Restore original fetch
    globalThis.fetch = originalFetch;
  }
});
