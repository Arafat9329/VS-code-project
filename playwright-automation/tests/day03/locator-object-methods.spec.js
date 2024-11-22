import { test, expect } from "@playwright/test";

test.describe("Test Group", () => {
  let checkBox;

  // create beforeeach and afterEach
  test.beforeEach(async ({ page }) => {
    await page.goto("https://practice.cydeo.com/");
    checkBox = page.locator("a[href='/checkboxes']");
  });

  test.afterEach(async ({ page }) => {
    // await page.waitForTimeout(3000);
  });

  test("check() checks the radio button and checkboxes if they havnt checked", async ({
    page,
  }) => {
    await checkBox.click();
    let checkbox1 = page.locator("input#box1");
    let checkbox2 = page.locator("input#box2");
    await expect(checkbox1).not.toBeChecked();

    await checkbox1.check();
    await checkbox2.check();
    //paues 3 second
    // await page.waitForTimeout(3000);

    await expect(checkbox1).toBeChecked(); // passing locator object (Webelement) to the assertions
    await expect(checkbox2).toBeChecked();

    expect(await checkbox1.isChecked()).toBeTruthy();
  });

  test("Unchecked", async ({ page }) => {
    await checkBox.click();

    //paues 3 second
    // await page.waitForTimeout(3000);

    let checkbox1 = page.locator("input#box1");
    let checkbox2 = page.locator("input#box2");
    await expect(checkbox1).not.toBeChecked();

    //paues 3 second
    await page.waitForTimeout(1000);
    checkbox1.uncheck();
    //paues 3 second
    await page.waitForTimeout(1000);

    await expect(checkbox1).not.toBeChecked();

    await checkbox2.uncheck();

    await expect(checkbox1).not.toBeChecked();
  });

  test("dropdown", async ({ page }) => {
    // Empty test body
  });
});
