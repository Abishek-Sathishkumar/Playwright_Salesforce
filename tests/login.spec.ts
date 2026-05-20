import { test } from '@playwright/test';
import { LoginPage } from '../Pages/LoginPage';
import { ENV } from '../utils/env';

test.describe('Salesforce Login Setup', () => {

  test('TC001 - Login and save session', async ({ page }) => {

    const loginPage = new LoginPage(page);

    // Step 1: Open login page
    await loginPage.goto();

    // Step 2: Perform login (OTP will come ONLY here)
    await loginPage.login(ENV.SF_USERNAME, ENV.SF_PASSWORD);

     // 🔥 Pause here to enter OTP manually
    await page.pause();

    // After OTP, resume manually

    // Step 3: Verify login
    await loginPage.verifyLoginSuccess();

    // 🔥 Step 4: Save session (VERY IMPORTANT)
    await page.context().storageState({
      path: 'playwright/.auth/user.json',
    });

  });

});