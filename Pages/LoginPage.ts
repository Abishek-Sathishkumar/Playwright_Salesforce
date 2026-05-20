import { Page, expect } from '@playwright/test';

export class LoginPage {

    private usernameField;
    private passwordField;
    private loginButton;   
    private errorMessage; 

  constructor(private page: Page) {
        // Locators
    this.usernameField = this.page.locator('#username');
    this.passwordField = this.page.locator('#password');
    this.loginButton   = this.page.locator('#Login');
    this.errorMessage  = this.page.locator('#error');

  }

  // Navigate to login page
  async goto() {
    await this.page.goto('/');
    await expect(this.page).toHaveTitle(/Salesforce/);
  }

  // Perform login
  async login(username: string, password: string) {
    await this.usernameField.fill(username);
    await this.passwordField.pressSequentially(password, { delay: 100 });
    await this.loginButton.click();
  }

  // Verify login success
  async verifyLoginSuccess() {
    await expect(this.page).toHaveURL(/lightning/, { timeout: 30000 });
  }

  // Verify login failure
  async verifyLoginFailure() {
    await expect(this.errorMessage).toBeVisible({ timeout: 5000 });
  }
}