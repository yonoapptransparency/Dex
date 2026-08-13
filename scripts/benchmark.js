const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({ args: ['--no-sandbox'] });
  const page = await browser.newPage();

  page.on('console', msg => console.log(msg.text()));

  await page.goto('http://example.com');

  await page.evaluate(() => {
    try {
      // Populate localStorage
      for (let i = 0; i < 10000; i++) {
        localStorage.setItem(`playstore_rated_app_${i}`, 'true');
        localStorage.setItem(`playstore_rating_val_app_${i}`, '5');
        localStorage.setItem(`local_user_reviews_app_${i}`, '[]');
      }

      // Benchmark unoptimized (reads directly from localStorage)
      const start1 = performance.now();
      for (let i = 0; i < 10000; i++) {
        const rated = localStorage.getItem(`playstore_rated_app_${i}`);
        if (rated) {
          const val = localStorage.getItem(`playstore_rating_val_app_${i}`);
        }
      }
      const end1 = performance.now();

      // Memory cache
      const cache = new Map();
      const getCached = (key) => {
        if (cache.has(key)) return cache.get(key);
        const val = localStorage.getItem(key);
        cache.set(key, val);
        return val;
      }

      // Warm up cache
      for (let i = 0; i < 10000; i++) {
        getCached(`playstore_rated_app_${i}`);
        getCached(`playstore_rating_val_app_${i}`);
      }

      // Benchmark optimized (reads from cache)
      const start2 = performance.now();
      for (let i = 0; i < 10000; i++) {
        const rated = getCached(`playstore_rated_app_${i}`);
        if (rated) {
          const val = getCached(`playstore_rating_val_app_${i}`);
        }
      }
      const end2 = performance.now();

      console.log(`Baseline (Direct LocalStorage): ${end1 - start1} ms`);
      console.log(`Optimized (Memory Cache): ${end2 - start2} ms`);
    } catch(e) {
      console.log("Error: " + e);
    }
  });

  await browser.close();
})();
