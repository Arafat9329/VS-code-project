import { test, expect } from "@playwright/test";

test.describe("Test Group @group2", () => {
  //creare beforeach hook that will navigate to https://practice.cydeo.com/
  test.beforeEach(async ({ page }) => {
    await page.goto("https://practice.cydeo.com/");
  });

  //create after each hook that will wait for 3 seconds before executing the test
  test.afterEach(async ({ page }) => {
    await page.waitForTimeout(3000);
  });

  test("Get the title of the page", async ({ page }) => {
    let actulTitle = await page.title();
    let expectedTitle = "Practice";
    expect(actulTitle).toEqual(expectedTitle);
  });

  test("Get the URL of the page", async ({ page }) => {
    let actulUrl = page.url();
    expect(actulUrl).toContain("cydeo");
  });

  test("Click the A/B Testing link @group2-3", async ({ page }) => {
    let abTestingLink = page.locator("a[href='/abtest']");
    // let abTestingLink = page.locator("text=A/B Testing");
    // page.getByText("A/B Testing").click();
    expect(await abTestingLink.isEnabled()).toBeTruthy();
    await expect(await abTestingLink).toBeEnabled();
  });
});
