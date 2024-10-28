import {
  expectAccessibilityOk,
  filterStories,
  gotoStory,
  STORYBOOK_ROOT_SELECTOR,
} from '@/playwright/utils';
import manifest from '@/storybook-static/index.json' with { type: 'json' };
import { test, expect } from '@playwright/test';
import type { IndexEntry } from 'storybook/internal/types';

const testableStories = filterStories(
  Object.values(manifest.entries) as Array<IndexEntry>,
);

const THEMES = ['oph', 'opintopolku'] as const;

for (const theme of THEMES) {
  for (const story of testableStories) {
    const themeStoryId = `${theme}--${story.id}`;
    test(themeStoryId, async ({ page }) => {
      await gotoStory(page, theme, story.id);
      await Promise.all([
        expectAccessibilityOk(page, STORYBOOK_ROOT_SELECTOR),
        expect(page).toHaveScreenshot(`${themeStoryId}.png`, {
          animations: 'disabled',
        }),
      ]);
    });
  }
}
