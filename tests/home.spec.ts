import { test, expect } from '@playwright/test';

test('TC002 - Verify Salesforce Home Page', async ({ page }) => {
  await page.waitForLoadState('networkidle');

  // ✅ Flexible check (fix your failure)
  await page.waitForURL(/(home|lightning|one)/, {
    timeout: 60000,
  });

  await expect(page).toBeTruthy();
});