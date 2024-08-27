import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  snapshotDir: './playwright/snapshots',
  globalSetup: './playwright/global-setup.ts',
  reporter: 'list',
  testDir: './playwright/tests',
  fullyParallel: true,
  forbidOnly: Boolean(process.env.CI),
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 2 : undefined,
  snapshotPathTemplate:
    '{snapshotDir}/{testFileDir}/{testFileName}-snapshots/{arg}{ext}',
  expect: {
    timeout: 10 * 1000,
  },
  use: {
    baseURL: 'http://127.0.0.1:6006',
    trace: 'on-first-retry',
  },
  projects: [
    {
      name: 'chromium',
      use: {
        ...devices['Desktop Chrome'],
        launchOptions: {
          args: [
            '--font-render-hinting=none',
            '--disable-skia-runtime-opts',
            '--disable-font-subpixel-positioning',
            '--disable-lcd-text',
          ],
        },
      },
    },
  ],
});
