import { OphNextJsThemeProvider } from '@/src/next/theme';
import { Box, Stack } from '@mui/material';
import type { Preview } from '@storybook/react';
import { viewport } from './viewport';
import { ophColors } from '@/src';

const preview: Preview = {
  parameters: {
    options: {
      storySort: {
        order: ['Getting started', 'Colors', 'Theme', 'components', 'Utils'],
      },
    },
    backgrounds: {
      values: [
        { name: 'default', value: ophColors.grey50 },
        { name: 'white', value: 'white' },
      ],
      default: 'default',
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    docs: {
      controls: {
        sort: 'requiredFirst',
      },
    },
    viewport,
  },
  globalTypes: {
    theme: {
      description: 'Theme',
      defaultValue: 'both',
      toolbar: {
        // The label to show for this toolbar item
        title: 'Theme',
        icon: 'circlehollow',
        items: [
          { value: 'oph', title: 'OPH' },
          { value: 'opintopolku', title: 'Opintopolku' },
          { value: 'both', title: 'Molemmat' },
        ],
        // Change title based on selected value
        dynamicTitle: true,
      },
    },
  },

  decorators: [
    (Story, { globals }) => {
      const { theme } = globals;
      switch (theme) {
        case 'both':
          return (
            <Stack direction="row" gap={4} flexWrap="wrap">
              <Box>
                <OphNextJsThemeProvider variant="oph" lang="fi">
                  <Story />
                </OphNextJsThemeProvider>
              </Box>
              <Box>
                <OphNextJsThemeProvider variant="opintopolku" lang="fi">
                  <Story />
                </OphNextJsThemeProvider>
              </Box>
            </Stack>
          );
        default:
          return (
            <OphNextJsThemeProvider variant={theme as 'oph' | 'opintopolku'}>
              <Story />
            </OphNextJsThemeProvider>
          );
      }
    },
  ],

  tags: ['autodocs'],
};

export default preview;
