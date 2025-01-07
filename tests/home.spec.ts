import { test, expect } from "@playwright/test"

test("home", async ({ page }) => {
  await page.goto("/")
  await expect(page.getByText("hello world")).toBeVisible()
  await expect(page.getByText("javascript")).not.toBeVisible()
})

test("skill page", async ({ page }) => {
  await page.goto("/javascript")
  await expect(page.getByText("hello world, javascript")).toBeVisible()
})
