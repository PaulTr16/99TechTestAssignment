import { defineConfig, devices } from '@playwright/test';
import * as dotenv from "dotenv"
import path from "path";

/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */
// import dotenv from 'dotenv';
// import path from 'path';
// dotenv.config({ path: path.resolve(__dirname, '.env') });

if (!process.env.ENV) {
  dotenv.config({ path: path.resolve(__dirname, "./envs/.env.prod") });
} else {
  dotenv.config({
    path: path.resolve(__dirname, `./envs/.env.${process.env.ENV}`), 
  });
}

/**
 * See https://playwright.dev/docs/test-configuration.
 */
export default defineConfig({
  testDir: './tests',
  /* Run tests in files in parallel */
  fullyParallel: true,
  /* Fail the build on CI if you accidentally left test.only in the source code. */
  forbidOnly: !!process.env.CI,
  /* Retry on CI only */
  retries: process.env.CI ? 2 : 0,
  /* Opt out of parallel tests on CI. */
  workers: process.env.CI ? 4 : undefined,
  /* Reporter to use. See https://playwright.dev/docs/test-reporters */
  reporter: [['html', { open: 'always' }]],
  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  use: {
    /* Base URL to use in actions like `await page.goto('/')`. */
    // baseURL: 'http://localhost:3000',

    /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
    trace: 'on-first-retry',
    screenshot: "only-on-failure",
     /* Tell all tests to load signed-in state from 'storageState.json' */
    // storageState: "./StorageState.json",
  },

  /* Configure projects for major browsers */
  projects: [
    {
      name: "setup",

      use: {
        ...devices["Desktop Chrome"],
      },
      testDir: "./src/utils/",
      testMatch: "/setup.ts",

    },

    {
      name: "chromium",
      dependencies: ["setup"],
      /* Project-specific settings. */
      use: {
        ...devices["Desktop Chrome"],
        headless: true,
        storageState: "./storageState.json",
      },
    },
    {
      name: 'firefox',
     dependencies: ["setup"],
      /* Project-specific settings. */
      use: {
        ...devices["Desktop Firefox"],
        headless: true,
        storageState: "./storageState.json",
      },
    },
  ],

  /* Run your local dev server before starting the tests */
  // webServer: {
  //   command: 'npm run start',
  //   url: 'http://localhost:3000',
  //   reuseExistingServer: !process.env.CI,
  // },
});
