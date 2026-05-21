import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests',

  fullyParallel: false,
  retries: 1,
  workers: 1,

  reporter: 'html',

  use: {
    baseURL: 'https://login.salesforce.com',

    headless: true, // ✅ IMPORTANT for Jenkins

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