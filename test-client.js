const puppeteer = require('puppeteer');
(async () => {
  const browser = await puppeteer.launch({ args: ['--no-sandbox', '--disable-setuid-sandbox'] });
  const page = await browser.newPage();
  await page.goto('http://localhost:3000/moreinfo/123', { waitUntil: 'networkidle0' });
  
  const result = await page.evaluate(async () => {
    try {
      const res = await fetch('/api/v1/init-file', { headers: { Accept: 'application/json' } });
      const text = await res.text();
      return { status: res.status, type: res.headers.get('content-type'), body: text.substring(0, 100) };
    } catch (e) {
      return { error: e.toString() };
    }
  });
  console.log("FETCH RESULT:", result);
  await browser.close();
})();
