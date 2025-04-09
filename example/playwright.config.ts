import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  expect: {
    timeout: 10 * 1000,
  },
  fullyParallel: true,
  workers: 2,
  use: {
    baseURL: `http://${process.env.DOCKER ? 'host.docker.internal' : '127.0.0.1'}:3000`,
    trace: 'on-first-retry',
  },
  projects: [
    {
      name: 'chromium',
      use: {
        ...devices['Desktop Chrome'],
      },
    },
  ],
});
