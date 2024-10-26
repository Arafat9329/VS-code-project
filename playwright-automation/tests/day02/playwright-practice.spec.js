const { test, expect } = require("@playwright/test");

test("has title", async ({ page }) => {
  await page.goto("https://youtube.com/");

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/YouTube/);
});
