import { test } from '@playwright/test';
import { LoginPage } from '../Pages/LoginPage';

test('TC001 - Salesforce Login', async ({ page }) => {
  const loginPage = new LoginPage(page);

  await loginPage.login(
    process.env.SF_USERNAME!,
    process.env.SF_PASSWORD!
  );
});