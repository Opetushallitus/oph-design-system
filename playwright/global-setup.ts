import { type FullConfig } from '@playwright/test';
import fs from 'fs';
import path from 'path';

async function globalSetup(config: FullConfig) {
  const { baseURL } = config.projects[0].use;
  let manifestText = '';
  try {
    const manifest = await fetch(`${baseURL ?? ''}/index.json`);
    manifestText = await manifest.text();
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (e: unknown) {
    throw Error("Storybook not running! Please start storybook before running Playwright tests.")
  }
  const storybookDir = path.resolve('./storybook-static');
  if (!fs.existsSync(storybookDir)) {
    fs.mkdirSync(storybookDir);
  }
  fs.writeFileSync(path.join(storybookDir, 'index.json'), manifestText);
}

export default globalSetup;