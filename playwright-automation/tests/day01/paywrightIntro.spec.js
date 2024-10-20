// const { test, expect } = require("@playwright/test");
import { test } from "@playwright/test"; // import the test function from @playwright/test

test("Simple Playwrite Automation Test @google", async ({ page }) => {
  await page.goto("https://www.google.com/");
  await page.waitForTimeout(1000);

  /*
  <textarea class="gLFyf" aria-controls="Alh6id" aria-owns="Alh6id" autofocus="" title="Search" value="" jsaction="paste:puy29d;" aria-label="Search" aria-autocomplete="both" aria-expanded="false" aria-haspopup="false" autocapitalize="off" autocomplete="off" autocorrect="off" id="APjFqb" maxlength="2048" name="q" role="combobox" rows="1" spellcheck="false" data-ved="0ahUKEwjjgaOC1ZuJAxURIjQIHc9dD-AQ39UDCAc"></textarea>
*/
  //textarea[@class="gLFyf"];

  //found by AI: '//textarea[@id="APjFqb"]'
  let searchBox = page.locator('//textarea[@id="APjFqb"]');
  searchBox.fill("playwright automation test");
  await page.waitForTimeout(1000);

  searchBox.press("Enter");
  await page.waitForTimeout(1000);
});

test("Simple Playwrite Automation Test @youtube", async ({ page }) => {
  await page.goto("https://www.youtube.com/");
  await page.waitForTimeout(3000);
});
