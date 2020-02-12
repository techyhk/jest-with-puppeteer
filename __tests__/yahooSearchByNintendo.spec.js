describe('Yahoo! JAPAN', () => {
  beforeAll(async () => {
    await page.goto('https://www.yahoo.co.jp/');
  });

  it('「任天堂」の Yahoo! 検索結果に「任天堂ホームページ」が出現していること', async () => {
    const searchBoxSelector = 'input[type="search"]';
    await page.waitForSelector(searchBoxSelector);
    await page.type(searchBoxSelector, '任天堂');

    const searchButtonSelector = 'button[class*="rapid-noclick-resp"]';
    await page.waitForSelector(searchButtonSelector);
    await page.click(searchButtonSelector);

    await page.waitForSelector('[id="contents"]');
    await expect(page).toMatch('任天堂ホームページ');
    await page.screenshot({
      path: 'screenshots/nintendo_de_puppeteer_screenshot.png'
    });
  });
});
