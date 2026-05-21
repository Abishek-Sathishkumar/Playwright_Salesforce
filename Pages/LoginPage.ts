import { Page } from '@playwright/test';

export class LoginPage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async login(username: string, password: string) {
    console.log('Opening Salesforce login page...');

    await this.page.goto('https://login.salesforce.com');

    console.log('Entering username...');
    await this.page.locator('#username').fill(username);

    console.log('Entering password...');
    await this.page.locator('#password').fill(password);

    console.log('Clicking login...');
    await this.page.locator('#Login').click();

    // 🔥 CRITICAL WAIT (fix for your issue)
    await this.page.waitForLoadState('networkidle');
    await this.page.waitForTimeout(10000);

    console.log('After login URL:', this.page.url());

    // ✅ Flexible success check (VERY IMPORTANT)
    await this.page.waitForURL(/(home|lightning|one)/, {
      timeout: 60000,
    });

    console.log('Login successful');
  }
}