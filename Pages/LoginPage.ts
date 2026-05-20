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
    console.log('Opening Salesforce login page...');
    await this.page.goto('/');
    await this.page.locator('#username').waitFor({ timeout: 15000 });
    console.log('Login page loaded');
  }

  // Perform login
  async login(username: string, password: string) {
    console.log('Entering username...');
    await this.usernameField.fill(username);
    console.log('Entering password...');
    await this.passwordField.pressSequentially(password, { delay: 100 });
    console.log('Clicking login...');
    await this.loginButton.click();
    await this.page.waitForLoadState('networkidle');
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