const puppeteer = require("puppeteer");
const cheerio = require("cheerio");

async function puppeteerScrapeScriptTag() {
  try {
    var url =
      "https://elements.envato.com/pt-br/notepaper-hanging-on-clothesline-PHGVKY9";
    const browser = await puppeteer.launch({
      headless: true,
      args: ["--no-sandbox", "--disable-setuid-sandbox"],
    });
    const page = await browser.newPage();
    await page.setDefaultNavigationTimeout(0);
    // sets user agent to internet explorer 11

    await page.goto(url);
    let bodyHTML = await page.evaluate(() => document.body.innerHTML);
    const $ = bodyHTML;
    console.log($)
    await browser.close();
    // returns scriptData
    console.log(`returning scriptData`);
  } catch (err) {
    console.log(
      `~~~~~~~~~~~~~~~~~~~~~~~~ err caught in puppeteerScrapeScriptTag ~~~~~~~~~~~~~~~~~~~~~~~~`
    );
    console.log(err);
  }
}

module.exports = puppeteerScrapeScriptTag;
