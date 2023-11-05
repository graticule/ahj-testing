import puppetteer from "puppeteer";
import { fork } from "child_process";

const fixture = [
  ["visa", ["4556473415123693", "4532946216209471", "4716758491126613704"]],
  ["mastercard", ["2720996419031806", "5250585265988051", "5306665135126159"]],
  [
    "american-express",
    ["340593582600808", "343243873632329", "375297249082545"],
  ],
  ["jcb", ["3533833300850819", "3534794536645580", "3539308220169246938"]],
  ["mir", ["2201449796032631", "2200720101432661", "2201486685366092"]],
];

jest.setTimeout(30000); // default puppeteer timeout

describe("Credit Card Validator form", () => {
  let browser = null;
  let page = null;
  let server = null;
  const baseUrl = "http://localhost:9000";

  beforeAll(async () => {
    server = fork(`${__dirname}/e2e.server.js`);
    await new Promise((resolve, reject) => {
      server.on("error", reject);
      server.on("message", (message) => {
        if (message === "ok") {
          resolve();
        }
      });
    });

    browser = await puppetteer.launch({
      headless: "new",
      // headless: false, // show gui
      // slowMo: 250,
      // devtools: true, // show devTools
    });
    page = await browser.newPage();
    await page.goto(baseUrl);
  });

  afterAll(async () => {
    await browser.close();
    server.kill();
  });

  test("should add do something", async () => {
    const cardWidget = await page.evaluate(() => {
      return document.querySelector(".card-widget");
    });
    expect(cardWidget).toBeTruthy();
  });
});
