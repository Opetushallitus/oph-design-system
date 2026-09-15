import { test, expect, type BrowserContext } from '@playwright/test';
import { type OphLanguage } from '@opetushallitus/oph-design-system';
import fi from '../messages/fi.json' with { type: 'json' };
import sv from '../messages/sv.json' with { type: 'json' };
import en from '../messages/en.json' with { type: 'json' };

const setLang = async (
  context: BrowserContext,
  baseURL: string | undefined,
  lang: OphLanguage,
) => {
  await context.addCookies([{ url: baseURL, name: 'lang', value: lang }]);
};

const TEST_DEFS = [
  {
    lang: 'fi',
    close: 'Sulje',
    ...fi,
  },
  {
    lang: 'en',
    close: 'Close',
    ...en,
  },
  {
    lang: 'sv',
    close: 'Stäng',
    ...sv,
  },
];

for (const DEFS of TEST_DEFS) {
  test(`Example renders with lang=${DEFS.lang}`, async ({
    page,
    context,
    baseURL,
  }) => {
    await setLang(context, baseURL, DEFS.lang as OphLanguage);
    await page.goto('/');

    const title = page.getByRole('heading', { name: DEFS.title });
    const button = page.getByRole('button', { name: DEFS.button });
    const warning = page.locator('[role="alert"]', { hasText: DEFS.warning });
    const warningCloseButton = warning.getByRole('button', {
      name: DEFS.close,
    });

    await expect(title).toBeVisible();
    await expect(button).toBeVisible();
    await expect(warning).toBeVisible();
    await expect(warningCloseButton).toBeVisible();
  });
}
