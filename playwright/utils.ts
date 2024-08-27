import type { ThemeVariant } from '@/src/theme';
import AxeBuilder from '@axe-core/playwright';
import { type Page, expect } from '@playwright/test';
import type { StoryContext as CsfStoryContext } from '@storybook/csf';
import { viewport as storybookViewport } from '@/.storybook/viewport';
import type { IndexEntry } from 'storybook/internal/types';

const storybookViewports = storybookViewport.viewports;

export const expectAccessibilityOk = async (page: Page, selector?: string) => {
  let analyzer = new AxeBuilder({ page });
  if (selector) {
    analyzer = analyzer.include(selector)
  }

  const accessibilityScanResults = await analyzer.analyze();
  expect(accessibilityScanResults.violations).toEqual([]);
};

async function getStoryContext(page: Page, id: string): Promise<CsfStoryContext> {
  if (!page.url().includes('iframe.html')) {
    await page.goto('/iframe.html');
  }
  // eslint-disable-next-line @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-explicit-any
  return page.evaluate(({ storyId }) => (globalThis as any).__STORYBOOK_PREVIEW__.storyStore.loadStory({ storyId }) as CsfStoryContext, { storyId: id });
}

export const filterStories = (
  stories: Array<IndexEntry>,
): Array<IndexEntry> => stories.filter((story) => !story.id.includes('docs'));

export function getStoryUrl(theme: ThemeVariant, id: string): string {
  const params = new URLSearchParams({
    id,
    viewMode: 'story',
    globals: `theme:${theme}`,
  });

  return `/iframe.html?${params.toString()}`;
}

const setStorybookViewportSize = async (page: Page, styles: { width: string, height: string }) => {
  await page.setViewportSize({ width: parseInt(styles.width, 10), height: parseInt(styles.height, 10) });
}

export async function gotoStory(
  page: Page,
  theme: ThemeVariant,
  story: IndexEntry,
): Promise<void> {
  try {
    const storyContext = await getStoryContext(page, story.id);
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
    const selectedViewportId = storyContext.parameters.viewport?.defaultViewport as string;
    const selectedViewport = storybookViewports[selectedViewportId]
    await setStorybookViewportSize(page, selectedViewport.styles)
    const url = getStoryUrl(theme, story.id);
    await page.goto(url);
    await Promise.all([
      page.waitForLoadState('domcontentloaded'),
      page.waitForLoadState('load'),
      page.evaluate(() => document.fonts.ready),
    ]);
  } catch (error) {
    return Promise.reject(error as Error);
  }
}
