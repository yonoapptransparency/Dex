import { test, mock, after, beforeEach } from 'node:test';
import assert from 'node:assert';
import { fetchStoreData, clearSeoCache } from './seoHelper';

test('fetchStoreData caching behavior', async (t) => {
  let fetchCount = 0;
  let fetchResolver: any = null;
  let mockedTime = 1000000;

  // Mock global fetch to simulate successful network calls from syncFromFirestore
  mock.method(globalThis, 'fetch', async () => {
    fetchCount++;
    await new Promise(resolve => {
      fetchResolver = resolve;
      setTimeout(resolve, 5);
    });
    return { ok: true, json: async () => ({ fields: {} }) };
  });

  // Mock Date.now() directly
  mock.method(Date, 'now', () => mockedTime);

  beforeEach(() => {
    clearSeoCache(); // Exported in src/seoHelper.ts line 32
    fetchCount = 0;
    mockedTime = 1000000; // Start at an arbitrary timestamp
  });

  after(() => {
    mock.restoreAll();
  });

  await t.test('Initial Fetch (Empty Cache)', async () => {
    const data = await fetchStoreData();
    assert.ok(data, 'Should return store data');
    assert.strictEqual(fetchCount > 0, true, 'Should trigger network fetch when cache is empty');
  });

  await t.test('Fresh Cache', async () => {
    await fetchStoreData();
    const fetchesAfterInitial = fetchCount;

    mockedTime = 1010000; // advance 10s (within 15s TTL)

    const data = await fetchStoreData();
    assert.ok(data, 'Should return store data');
    assert.strictEqual(fetchCount, fetchesAfterInitial, 'Should not trigger another fetch if within TTL');
  });

  await t.test('Stale Cache (Background Fetch)', async () => {
    await fetchStoreData();
    const fetchesAfterInitial = fetchCount;

    mockedTime = 1020000; // advance 20s (stale, > 15s, but not super stale > 225s)

    // Should return immediately without waiting for fetch
    const data = await fetchStoreData();
    assert.ok(data);

    // Call it again immediately to ensure duplicate fetches are blocked
    const data2 = await fetchStoreData();
    assert.ok(data2);

    // Allow the background fetch microtasks to resolve so `fetchCount` updates
    await new Promise(resolve => setTimeout(resolve, 20));

    // It should have triggered one more fetch attempt in the background
    assert.ok(fetchCount > fetchesAfterInitial, 'Background fetch should have been triggered');
  });

  await t.test('Super Stale Cache (Blocking Fetch)', async () => {
    await fetchStoreData();
    const fetchesAfterInitial = fetchCount;

    mockedTime = 1300000; // advance 300s (super stale > 225s)

    // Since it's super stale, it awaits the fetch
    const data = await fetchStoreData();

    assert.ok(data);
    assert.ok(fetchCount > fetchesAfterInitial, 'Should trigger network fetch when cache is super stale');
  });
});
