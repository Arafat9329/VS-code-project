// const { test, expect } = require("@playwright/test");
import { test } from "@playwright/test"; // import the test function from @playwright/test

test("Simple Playwrite Automation Test", async ({ page }) => {
  await page.goto("https://www.google.com/");
});
