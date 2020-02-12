const Googler = require('../src/googler');
const Yahooer = require('../src/yahooer');

describe('外部スクリプトを使う', () => {
  it('Googler が登場すること', async () => {
    const weAreGoogler = new Googler();
    await expect(weAreGoogler.debugger()).toBe('Googler');
  });

  it('任天堂ホームページ が登場すること', async () => {
    await page.goto('https://www.yahoo.co.jp/');

    const weAreYahooer = await new Yahooer();
    const yahooerNintendoPage = await weAreYahooer.nintendo(page);

    const text = yahooerNintendoPage.evaluate('#contents', item => {
      return item.textContent;
    });
    console.log(text); // Promise { <pending> }

    // await yahooerNintendoPage.screenshot({
    //   path: 'screenshots/nintendo_de_puppeteer_screenshot.png'
    // });

    // await expect(text).toMatch(/.*任天堂ホムーページ.*/);
  });
});
