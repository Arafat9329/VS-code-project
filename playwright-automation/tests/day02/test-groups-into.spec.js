import { test } from "@playwright/test";
import { before } from "node:test";

test.describe("Test Group @group1", async () => {
  test.beforeAll(async () => {
    console.log("Before All Test Group");
  });

  test.afterAll(async () => {
    console.log("After All Test Group");
  });

  test.beforeEach(async () => {
    console.log("beforeEach  Test Group");
  });

  test.afterEach(async () => {
    console.log("afterEach  Test Group");
  });

  test("Test01", async ({ page }) => {
    console.log("Test01 is executing successfully");
  });

  test("Test02", async ({ page }) => {
    console.log("Test01 is executing successfully");
  });

  test("Test03", async ({ page }) => {
    console.log("Test01 is executing successfully");
  });
});
