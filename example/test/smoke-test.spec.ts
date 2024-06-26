import { test, expect } from '@playwright/test';

test('Example renders', async ({ page }) => {
  await page.goto('http://localhost:3000');

  const heading = page.getByRole('heading', { name: 'Otsikko' });
  const button = page.getByRole('button', { name: 'Painike' });

  await expect(heading).toBeVisible();
  await expect(button).toBeVisible();
});
