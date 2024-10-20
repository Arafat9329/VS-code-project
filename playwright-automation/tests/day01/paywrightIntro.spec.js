// const { test, expect } = require("@playwright/test");
import { test } from "@playwright/test"; // import the test function from @playwright/test

test("Simple Playwrite Automation Test @google", async ({ page }) => {
  await page.goto("https://www.google.com/");
  await page.waitForTimeout(3000);
});

test("Simple Playwrite Automation Test @youtube", async ({ page }) => {
  await page.goto("https://www.youtube.com/");
  await page.waitForTimeout(3000);
});
