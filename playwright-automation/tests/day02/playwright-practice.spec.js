// const { test, expect } = require("@playwright/test");
import { test } from "@playwright/test"; // import the test function from @playwright/test

test("Simple Playwrite Automation Test @openYoutube", async ({ page }) => {
  await page.goto("https://www.youtube.com/");
  await page.waitForTimeout(100);
  console.log("open page complted");

  const searchBox = page.locator("//input[@id='search']");
  await page.waitForTimeout(1000);
  await searchBox.type("Cydeo");
  await page.waitForTimeout(1000);
  console.log("enter search completd");

  await page.keyboard.press("Enter");
  await page.waitForTimeout(1000);

  const firstResult = await page.locator(
    "//*[@id='items']//ytd-video-renderer[1]"
  );
  await firstResult.click();
  await page.waitForTimeout(1000);
});
