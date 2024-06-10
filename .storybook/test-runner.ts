import { type TestRunnerConfig } from '@storybook/test-runner';
import { injectAxe, checkA11y } from 'axe-playwright';
import { toMatchImageSnapshot } from 'jest-image-snapshot';

declare global {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace jest {
    interface Matchers<R> {
      toMatchImageSnapshot(): R;
    }
  }
}

const customSnapshotsDir = `${process.cwd()}/__snapshots__`;

const config: TestRunnerConfig = {
  setup() {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    expect.extend({ toMatchImageSnapshot });
  },
  async preVisit(page) {
    await injectAxe(page);
  },
  async postVisit(page, context) {
    await Promise.all([
      page.waitForLoadState('domcontentloaded'),
      page.waitForLoadState('load'),
      page.evaluate(() => document.fonts.ready),
    ]);

    await checkA11y(page, '#storybook-root', {
      verbose: false, // Don't make a lot of lines to console about every successful test
    });

    const root = page.locator('#storybook-root');

    const image = await root.screenshot({ animations: 'disabled' });

    expect(image).toMatchImageSnapshot({
      customSnapshotsDir,
      customSnapshotIdentifier: context.id,
      diffDirection: 'vertical',
    });
  },
};

export default config;
