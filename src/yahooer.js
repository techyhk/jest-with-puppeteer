module.exports = class Yahooer {
  constructor() {}

  async nintendo(page) {
    const searchBoxSelector = 'input[type="search"]';
    await page.waitForSelector(searchBoxSelector);
    await page.type(searchBoxSelector, '任天堂');

    const searchButtonSelector = 'button[class*="rapid-noclick-resp"]';
    await page.waitForSelector(searchButtonSelector);
    await page.click(searchButtonSelector);

    await page.waitForSelector('[id="contents"]');
    return await page;
  }
};
