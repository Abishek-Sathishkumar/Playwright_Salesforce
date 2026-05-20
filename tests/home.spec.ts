import { test, expect } from '@playwright/test';

test.describe('Salesforce Home Page Tests', () => {

  test('TC002 - Verify Salesforce Home Page loads', async ({ page }) => {

    // Step 1: Open Salesforce (session will be used automatically)
    await page.goto('/');

    // Step 2: Wait for page to load
    await page.waitForLoadState('networkidle');

    // Step 3: Verify URL contains lightning
    await expect(page).toHaveURL(/lightning/, { timeout: 30000 });

    // Step 4: Verify main Salesforce app container is visible
    const appContainer = page.locator('one-app');

    await expect(appContainer).toBeVisible();

  });

});