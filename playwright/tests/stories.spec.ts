import {
  expectAccessibilityOk,
  filterStories,
  gotoStory,
} from '@/playwright/utils';
import manifest from '@/storybook-static/index.json' with { type: 'json' };
import { test, expect } from '@playwright/test';
import type { IndexEntry } from 'storybook/internal/types';

const testableStories = filterStories(
  // eslint-disable-next-line @typescript-eslint/no-unsafe-argument, @typescript-eslint/no-unsafe-member-access
  Object.values(manifest.entries) as Array<IndexEntry>
);

const THEMES = ['oph', 'opintopolku'] as const;

for (const theme of THEMES) {
  for (const story of testableStories) {
    const themeStoryId = `${theme}--${story.id}`;
    test(themeStoryId, async ({ page }) => {
      await gotoStory(page, theme, story);
      const rootId = '#storybook-root';

      await Promise.all([
        expectAccessibilityOk(page, rootId),
        expect(page).toHaveScreenshot(`${themeStoryId}.png`, {
          animations: 'disabled',
        }),
      ]);
    });
  };
}
