import { test, mock, beforeEach, afterEach } from 'node:test';
import assert from 'node:assert';
import { injectSeoTags, clearSeoCache } from './seoHelper';
import fs from 'fs';

// Helper mock fetch function
const mockFetchData = {
  settings: {
    site_title: 'Test Store',
    meta_description: 'Test meta description.',
    seo_keywords: 'test, keywords'
  },
  apps: [
    { slug: 'test-app', name: 'Test App', meta_description: 'Test App Description' }
  ],
  news: [
    { slug: 'test-news', title: 'Test News', description: 'Test News Description' }
  ],
  blogs: [
    { slug: 'test-blog', title: 'Test Blog', excerpt: 'Test Blog Excerpt' }
  ],
  videos: [
    { slug: 'test-video', title: 'Test Video', description: 'Test Video Description' }
  ]
};

beforeEach(() => {
  clearSeoCache();
  mock.method(fs, 'writeFileSync', () => {});

  mock.method(global, 'fetch', async (url: string) => {
    if (url.includes('public_settings')) {
      return {
        ok: true,
        json: async () => ({
          fields: {
            site_title: { stringValue: mockFetchData.settings.site_title },
            meta_description: { stringValue: mockFetchData.settings.meta_description },
            seo_keywords: { stringValue: mockFetchData.settings.seo_keywords }
          }
        })
      };
    }
    if (url.includes('apps') && !url.includes('apps_meta') && !url.includes('chunk')) {
      return {
        ok: true,
        json: async () => ({
          fields: {
            items: {
              arrayValue: {
                values: mockFetchData.apps.map(app => ({
                  mapValue: {
                    fields: {
                      slug: { stringValue: app.slug },
                      name: { stringValue: app.name },
                      meta_description: { stringValue: app.meta_description }
                    }
                  }
                }))
              }
            }
          }
        })
      };
    }
    if (url.includes('news')) {
      return {
        ok: true,
        json: async () => ({
          fields: {
            items: {
              arrayValue: {
                values: mockFetchData.news.map(n => ({
                  mapValue: {
                    fields: {
                      slug: { stringValue: n.slug },
                      title: { stringValue: n.title },
                      description: { stringValue: n.description }
                    }
                  }
                }))
              }
            }
          }
        })
      };
    }
    if (url.includes('blogs')) {
      return {
        ok: true,
        json: async () => ({
          fields: {
            items: {
              arrayValue: {
                values: mockFetchData.blogs.map(b => ({
                  mapValue: {
                    fields: {
                      slug: { stringValue: b.slug },
                      title: { stringValue: b.title },
                      excerpt: { stringValue: b.excerpt }
                    }
                  }
                }))
              }
            }
          }
        })
      };
    }
    if (url.includes('videos')) {
      return {
        ok: true,
        json: async () => ({
          fields: {
            items: {
              arrayValue: {
                values: mockFetchData.videos.map(v => ({
                  mapValue: {
                    fields: {
                      slug: { stringValue: v.slug },
                      title: { stringValue: v.title },
                      description: { stringValue: v.description }
                    }
                  }
                }))
              }
            }
          }
        })
      };
    }
    return {
      ok: true,
      json: async () => ({ fields: {} })
    };
  });
});

afterEach(() => {
  mock.restoreAll();
});

const template = '<html><head><title>Old Title</title></head><body><div id="root"></div></body></html>';

test('injectSeoTags - Home Page', async () => {
  const res = await injectSeoTags(template, '/');
  assert(res.html.includes('<title>Test Store</title>'));
  assert(res.html.includes('<meta name="description" content="Test meta description.">'));
  assert(res.html.includes('<meta name="keywords" content="test, keywords">'));
  assert.strictEqual(res.isNotFound, false);
});

test('injectSeoTags - App Page (exists)', async () => {
  const res = await injectSeoTags(template, '/app/test-app');
  assert(res.html.includes('<title>Test App | Test Store</title>'));
  assert(res.html.includes('<meta name="description" content="Test App Description">'));
  assert.strictEqual(res.isNotFound, false);
});

test('injectSeoTags - App Page (not found)', async () => {
  const res = await injectSeoTags(template, '/app/non-existent-app');
  // It shouldn't find the app, so it defaults to home page settings but sets isNotFound to true
  assert.strictEqual(res.isNotFound, true);
});

test('injectSeoTags - News List Page', async () => {
  const res = await injectSeoTags(template, '/news');
  assert(res.html.includes('<title>News & Updates | Test Store</title>'));
  assert.strictEqual(res.isNotFound, false);
});

test('injectSeoTags - News Detail Page (exists)', async () => {
  const res = await injectSeoTags(template, '/news/test-news');
  assert(res.html.includes('<title>Test News | Test Store</title>'));
  assert(res.html.includes('<meta name="description" content="Test News Description">'));
  assert.strictEqual(res.isNotFound, false);
});

test('injectSeoTags - News Detail Page (not found)', async () => {
  const res = await injectSeoTags(template, '/news/non-existent-news');
  assert.strictEqual(res.isNotFound, true);
});

test('injectSeoTags - Admin Page', async () => {
  const res = await injectSeoTags(template, '/admin/dashboard');
  assert(res.html.includes('<title>Admin Panel | Masterworld</title>'));
  assert(res.html.includes('<meta name="description" content="Masterworld Admin Control Dashboard">'));
  assert.strictEqual(res.isNotFound, false);
});

test('injectSeoTags - Info/App Page sets noindex', async () => {
  const res = await injectSeoTags(template, '/info/test-app');
  assert(res.html.includes('<title>More Info: Test App | Test Store</title>'));
  assert(res.html.includes('<meta name="robots" content="noindex">'));
  assert.strictEqual(res.isNotFound, false);
});
