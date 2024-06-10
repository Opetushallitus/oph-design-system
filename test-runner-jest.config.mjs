import { deepmerge } from '@mui/utils';
import { getJestConfig } from '@storybook/test-runner';

// The default Jest configuration comes from @storybook/test-runner
const testRunnerConfig = getJestConfig();

export default deepmerge(testRunnerConfig, {
  testEnvironmentOptions: {
    'jest-playwright': {
      launchOptions: {
        args: [
          '--font-render-hinting=none',
          '--disable-skia-runtime-opts',
          '--disable-font-subpixel-positioning',
          '--disable-lcd-text',
        ],
      },
    },
  },
});
