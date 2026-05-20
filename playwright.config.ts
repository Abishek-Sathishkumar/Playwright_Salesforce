import { defineConfig, devices } from '@playwright/test';
import dotenv from 'dotenv';

dotenv.config();

export default defineConfig({
  testDir: './tests',

  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,

  reporter: 'html',

  // ❌ REMOVE globalSetup (not needed now)
  // globalSetup: './global-setup.ts',

  use: {
    // 🔥 VERY IMPORTANT: Use your instance URL (not login.salesforce.com)
    //baseURL: 'https://codewithab-dev-ed.develop.my.salesforce.com',
    baseURL: 'https://login.salesforce.com',

    headless: process.env.CI ? true : false,

    launchOptions: {
      args: [
        '--disable-features=PasswordManager',
        '--disable-save-password-bubble',
        '--disable-autofill-keyboard-accessory-view',
      ],
    },

    // 🔥 Load saved session
    storageState: process.env.CI ? undefined : 'playwright/.auth/user.json',

    trace: 'on-first-retry',
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
  },

  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
  ],
});