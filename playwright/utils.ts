import type { OphThemeVariant } from '@/src/types';
import AxeBuilder from '@axe-core/playwright';
import { type Page, expect } from '@playwright/test';
import type { StoryContext as CsfStoryContext } from '@storybook/csf';
import { viewport as storybookViewport } from '@/.storybook/viewport';
import type { IndexEntry } from 'storybook/internal/types';

const storybookViewports = storybookViewport.viewports;

export const STORYBOOK_ROOT_SELECTOR = '#storybook-root';

export const expectAccessibilityOk = async (page: Page, selector?: string) => {
  let analyzer = new AxeBuilder({ page });
  if (selector) {
    analyzer = analyzer.include(selector);
  }

  const accessibilityScanResults = await analyzer.analyze();
  expect(accessibilityScanResults.violations).toEqual([]);
};

async function waitForStoryStoreInit(page: Page) {
  let tries = 10;
  while (tries > 0) {
    try {
      await page.evaluate(
        // eslint-disable-next-line @typescript-eslint/no-unsafe-return, @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-explicit-any
        () => (globalThis as any).__STORYBOOK_PREVIEW__.storyStore,
      );
      return;
    } catch (e) {
      tries -= 1;
      if (tries === 0) {
        throw e;
      }
      await page.waitForTimeout(300);
    }
  }
}

async function getStoryContext(
  page: Page,
  id: string,
): Promise<CsfStoryContext> {
  await waitForStoryStoreInit(page);
  return page.evaluate(
    ({ storyId }) =>
      // eslint-disable-next-line @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-explicit-any
      (globalThis as any).__STORYBOOK_PREVIEW__.storyStore.loadStory({
        storyId,
      }) as CsfStoryContext,
    { storyId: id },
  );
}

export const filterStories = (
  stories: Array<IndexEntry>,
): Array<IndexEntry> => {
  return stories.filter(
    (story) => !story.id.endsWith('--docs') && story.tags?.includes('test'),
  );
};

export function getStoryUrl(theme: OphThemeVariant, id: string): string {
  const params = new URLSearchParams({
    id,
    viewMode: 'story',
    globals: `theme:${theme}`,
  });

  return `/iframe.html?${params.toString()}`;
}

const setStorybookViewportSize = async (
  page: Page,
  styles: { width: string; height: string },
) => {
  await page.setViewportSize({
    width: parseInt(styles.width, 10),
    height: parseInt(styles.height, 10),
  });
};

export async function gotoStory(
  page: Page,
  theme: OphThemeVariant,
  id: string,
): Promise<void> {
  try {
    const url = getStoryUrl(theme, id);
    await page.goto(url, { waitUntil: 'domcontentloaded' });
    const storyContext = await getStoryContext(page, id);
    const selectedViewportId =
      // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
      storyContext.parameters.viewport?.defaultViewport as string;
    const selectedViewport = storybookViewports[selectedViewportId];
    await Promise.all([
      setStorybookViewportSize(page, selectedViewport.styles),
      page.waitForLoadState('load'),
      page.evaluate(() => document.fonts.ready),
      expect(page.locator(STORYBOOK_ROOT_SELECTOR)).toBeVisible(),
    ]);
  } catch (error) {
    return Promise.reject(error as Error);
  }
}
