import * as puppeteer from "puppeteer";

describe("Google", () => {
  beforeAll(async () => {});

  it('should be titled "Google"', async () => {
    const browser = await puppeteer.launch({
      headless: false,
      slowMo: 10,
      product: "chrome",
      args: [
        "--start-maximized",
        "--allow-insecure-localhost",
        "--disable-dev-profile",
        "--no-sandbox",
      ],
    });
    const page = await browser.newPage();
    page.setViewport({ width: 1280, height: 800 });

    page.on("dialog", async(dialog) => {
      await expect(dialog.message() === "wygrałeś");
      await dialog.accept();
      await browser.close();
    });

    await page.goto(`file:///${__dirname}/dist/index.html`);
    await page.click(`#TicTacToe`, { delay: 10 });
    await page.type("#size1", "4", { delay: 10 });
    await page.type("#size2", "4", { delay: 10 });
    await page.click(`#btn`, { delay: 10 });

    await page.click(`div[data-column="0"][data-row="0"]`, { delay: 10 });
    await page.click(`div[data-column="0"][data-row="1"]`, { delay: 10 });

    await page.click(`div[data-column="1"][data-row="0"]`, { delay: 10 });
    await page.click(`div[data-column="1"][data-row="1"]`, { delay: 10 });

    await page.click(`div[data-column="2"][data-row="0"]`, { delay: 10 });
    await page.click(`div[data-column="2"][data-row="1"]`, { delay: 10 });

    await page.screenshot({ path: "screen.png" });
    await page.click(`div[data-column="3"][data-row="0"]`, { delay: 10 });
  });
});
