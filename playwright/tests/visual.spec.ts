import {
  expectAccessibilityOk,
  filterStories,
  navigate,
} from '@/playwright/utils';
import manifest from '@/storybook-static/index.json' with { type: 'json' };
import { test, expect } from '@playwright/test';
import type { StoryContext } from '@storybook/react';

const visualStories = filterStories(
  Object.values(manifest.entries) as unknown as Array<StoryContext>,
);

const THEMES = ['oph', 'opintopolku'] as const;

for (const theme of THEMES) {
  visualStories.forEach((story) => {
    const themeStoryId = `${theme}--${story.id}`;
    test(themeStoryId, async ({ page }) => {
      await navigate(page, story.id, theme);
      const rootId = '#storybook-root';
      const storyRoot = page.locator(rootId);
      await Promise.all([
        expectAccessibilityOk(page, rootId),
        expect(storyRoot).toHaveScreenshot(`${themeStoryId}.png`, {
          animations: 'disabled',
        }),
      ]);
    });
  });
}
