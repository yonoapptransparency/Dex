import { describe, it, expect } from 'vitest';
import { resolveAppSlug } from './seoHelper';

describe('resolveAppSlug', () => {
  const mockAppsList = [
    { name: 'App One', slug: 'app-one', id: 1 },
    { name: 'App Two', slug: 'app-two', id: 2 },
    { name: 'Share Slots', slug: 'share-slots', id: 3 }, // Alias for 567-slots
    { name: 'Rummy Ludo', slug: 'rummy-ludo', id: 4 }, // Alias for uno
    { name: 'Some Substring', slug: 'some-substring-match', id: 5 },
    { name: 'No Slug App', id: 6 },
    { name: 'Complex Name App', slug: 'complex-name-app', id: 7 }
  ];

  it('should return null for empty or null rawSlug', () => {
    expect(resolveAppSlug('', mockAppsList)).toBeNull();
    expect(resolveAppSlug(null as unknown as string, mockAppsList)).toBeNull();
    expect(resolveAppSlug(undefined as unknown as string, mockAppsList)).toBeNull();
  });

  it('should return null if the cleaned slug is empty', () => {
    expect(resolveAppSlug('   ', mockAppsList)).toBeNull();
    expect(resolveAppSlug('//', mockAppsList)).toBeNull();
    expect(resolveAppSlug('---', mockAppsList)).toBeNull();
  });

  it('should match a direct slug correctly (case insensitive)', () => {
    expect(resolveAppSlug('app-one', mockAppsList)).toEqual(mockAppsList[0]);
    expect(resolveAppSlug('APP-TWO', mockAppsList)).toEqual(mockAppsList[1]);
  });

  it('should correctly strip leading and trailing slashes and decode URI components', () => {
    expect(resolveAppSlug('/app-one/', mockAppsList)).toEqual(mockAppsList[0]);
    expect(resolveAppSlug('%2Fapp-two%2F', mockAppsList)).toEqual(mockAppsList[1]);
  });

  it('should correctly strip trailing hyphens', () => {
    expect(resolveAppSlug('app-one-', mockAppsList)).toEqual(mockAppsList[0]);
    expect(resolveAppSlug('app-two--', mockAppsList)).toEqual(mockAppsList[1]);
  });

  it('should correctly resolve alias matches based on SLUG_ALIAS_MAP', () => {
    // SLUG_ALIAS_MAP has '567-slots' -> 'share-slots'
    expect(resolveAppSlug('567-slots', mockAppsList)).toEqual(mockAppsList[2]);
    // SLUG_ALIAS_MAP has 'uno' -> 'rummy-ludo'
    expect(resolveAppSlug('uno-', mockAppsList)).toEqual(mockAppsList[3]); // Testing trailing hyphen stripping alongside alias
  });

  it('should return a partial match if no direct or alias match is found', () => {
    // clean = 'substring-match', matches 'some-substring-match' (s.includes(clean))
    expect(resolveAppSlug('substring-match', mockAppsList)).toEqual(mockAppsList[4]);

    // clean = 'complex-name-app-extra', matches 'complex-name-app' (clean.includes(s))
    expect(resolveAppSlug('complex-name-app-extra', mockAppsList)).toEqual(mockAppsList[6]);
  });

  it('should return null if no match, alias, or partial match is found', () => {
    expect(resolveAppSlug('non-existent-app', mockAppsList)).toBeNull();
  });

  it('should handle apps with no slug gracefully', () => {
    expect(resolveAppSlug('no-slug-app', mockAppsList)).toBeNull();
  });
});
