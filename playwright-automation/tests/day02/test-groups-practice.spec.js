import { test, expect } from "@playwright/test";

test.describe("Test Group @group2", () => {
  test("Get the title of the page", async ({ page }) => {
    await page.goto("https://practice.cydeo.com/");
    let actulTitle = await page.title();
    let expectedTitle = "Practice";

    expect(actulTitle).toEqual(expectedTitle);
  });

  test("Get the URL of the page", async ({ page }) => {
    await page.goto("https://practice.cydeo.com/");
    let actulUrl = page.url();

    expect(actulUrl).toContain("cydeo");
  });

  test("Click the A/B Testing link", async ({ page }) => {
    await page.goto("https://practice.cydeo.com/");
    let abTestingLink = page.locator("text=A/B Testing");
    // page.getByText("A/B Testing").click();
    expect(await abTestingLink.isEnabled()).toBeTruthy();
    await expect(await abTestingLink).toBeEnabled();
  });
});
