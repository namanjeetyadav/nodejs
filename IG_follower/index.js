// const axios = require('axios');
// const cheerio = require('cheerio');

// // URL of the website to scrape
// const url = 'https://www.instagram.com/namanjeetyadav/following/';

// (async () => {
//   try {
//     // Fetch the webpage
//     const { data } = await axios.get(url);

//     // Load the HTML into cheerio
//     const $ = cheerio.load(data);

//     // Specify the class to scrape
//     const targetClass = '. xuxw1ft';

//     // Extract and store data
//     const scrapedData = [];
//     $(targetClass).each((index, element) => {
//       scrapedData.push($(element).text().trim());
//     });

//     console.log('Scraped Data:', scrapedData);
//   } catch (error) {
//     console.error('Error fetching the webpage:', error.message);
//   }
// })();


const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({ headless: false }); // Launch browser
  const page = await browser.newPage();
  
  // Navigate to Instagram login page
  await page.goto('https://www.instagram.com/accounts/login/');

  // Wait for the login form to load
  await page.waitForSelector('input[name="username"]');

  // Fill in your credentials
  await page.type('input[name="username"]', 'your-username');
  await page.type('input[name="password"]', 'your-password');
  
  // Click the login button and wait for navigation
  await Promise.all([
    page.click('button[type="submit"]'),
    page.waitForNavigation(),
  ]);

  // Navigate to the following list
  await page.goto('https://www.instagram.com/namanjeetyadav/following/');
  
  // Wait for the page content to load
  await page.waitForSelector('.xuxw1ft'); // Adjust the selector if necessary

  // Extract data
  const scrapedData = await page.evaluate(() => {
    const elements = document.querySelectorAll('.xuxw1ft'); // Update with the correct selector
    return Array.from(elements).map(el => el.innerText.trim());
  });

  console.log('Scraped Data:', scrapedData);

  // Close the browser
  await browser.close();
})();
