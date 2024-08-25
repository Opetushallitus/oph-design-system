import type { ThemeVariant } from '@/src/theme';
import AxeBuilder from '@axe-core/playwright';
import { type Page, expect } from '@playwright/test';
import { type StoryContext } from '@storybook/react';

export const expectAccessibilityOk = async (page: Page, selector: string) => {
  const accessibilityScanResults = await new AxeBuilder({ page })
    .include(selector)
    .analyze();
  expect(accessibilityScanResults.violations).toEqual([]);
};

export const filterStories = (
  stories: Array<StoryContext>,
): Array<StoryContext> => stories.filter((story) => !story.id.includes('docs'));


export function getStoryUrl(id: string, theme: ThemeVariant): string {
  const params = new URLSearchParams({
    id,
    viewMode: 'story',
    nav: '0',
    globals: `theme:${theme}`,
  });

  return `/iframe.html?${params.toString()}`;
}

export async function navigate(
  page: Page,
  id: string,
  theme: ThemeVariant,
): Promise<void> {
  try {
    const url = getStoryUrl(id, theme);

    await page.goto(url);
    await Promise.all([
      page.waitForLoadState('domcontentloaded'),
      page.waitForLoadState('load'),
      page.evaluate(() => document.fonts.ready),
    ]);
  } catch (error) {
    console.error(error);
    // Handle error here in cases where the above times out due to 404's and other factors.
  }
}
