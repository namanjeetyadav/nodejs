const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({ headless: false }); // Launch the browser
  const page = await browser.newPage();

  // Navigate to Instagram login page
  await page.goto('https://www.instagram.com/accounts/login/', { waitUntil: 'networkidle2' });

  // Wait for the login form to load
  await page.waitForSelector('input[name="username"]');
  console.log("Login page loaded");

  // Log in to your Instagram account
  await page.type('input[name="username"]', 'abhyanshsingh');
  await page.type('input[name="password"]', 'typescript');
  await Promise.all([
    page.click('button[type="submit"]'), // Click the login button
    page.waitForNavigation({ waitUntil: 'networkidle2' }), // Wait for navigation
  ]);
  console.log("Logged in successfully!");

  // Navigate to the profile page
  await page.goto('https://www.instagram.com/namanjeetyadav/', { waitUntil: 'networkidle2' });

  // Click the "Following" button
  await page.waitForSelector('a[href*="/following/"]');
  await Promise.all([
    page.click('a[href*="/following/"]'),
    page.waitForNavigation({ waitUntil: 'networkidle2' }),
  ]);
  console.log("Navigated to Following page");

  // Log the page content to inspect the HTML
  const pageContent = await page.content(); // Gets the page's HTML content
  console.log(pageContent); // Check the HTML in the console to find the correct selector

  // Wait for the specific span to appear
  await page.waitForSelector('.x1lliihq.x193iq5w.x6ikm8r.x10wlt62.xlyipyv.xuxw1ft', { timeout: 5000 });
  console.log("Specific span loaded");

  // Extract data from the span with the class
  const scrapedData = await page.evaluate(() => {
    const element = document.querySelector('.x1lliihq.x193iq5w.x6ikm8r.x10wlt62.xlyipyv.xuxw1ft'); // Target the specific span
    return element ? element.innerText.trim() : null;
  });

  console.log('Scraped Data:', scrapedData);

  // Close the browser
  await browser.close();
})();
