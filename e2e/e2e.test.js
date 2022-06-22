const puppeteer = require("puppeteer");
jest.setTimeout(30000);
var browser;
var page;
test("Open Chrome", async () => {
  browser = await puppeteer.launch({
    headless: false,
    slowMo: 100,
    // executablePath: "C:/Program Files (x86)/Mozilla Firefox/firefox.exe",
    devtools: true,
    args:
      // ["--window-size=1360,660"]
      ["--start-maximized"],
  });
  page = await browser.newPage();
  await page.setViewport({ width: 1360, height: 660 });
  await page.goto("http://localhost:3000/");
});
test("add first column and card", async () => {
  await page.click("#columnName");
  await page.type("#columnName", "column1");
  await page.waitForSelector(".addColumn");
  await page.click(".addColumn");
  await page.waitForSelector(".addCard");
  await page.click(".addCard");
  await page.click("#cardTitle");
  await page.type("#cardTitle", "first card");
  await page.keyboard.press("Tab");
  await page.type("#cardDueDate", "02032022");
  await page.click("#submitCard");
  await page.screenshot({ path: "addFirstColumnCard.png" });
  // await browser.close();
});
