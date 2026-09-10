import '@fontsource/open-sans/latin-400.css';
import '@fontsource/open-sans/latin-600.css';
import '@fontsource/open-sans/latin-700.css';
import { OphThemeProvider } from '@/src/theme';
import { Box, Stack } from '@mui/material';
import type { Preview } from '@storybook/react';
import { viewport } from './viewport';
import { ophColors } from '@/src';

const preview: Preview = {
  parameters: {
    options: {
      storySort: {
        order: [
          'Introduction',
          'Getting started',
          'Colors',
          'Theme',
          'components',
          'Utils',
        ],
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
      disableSaveFromUI: true,
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
          { value: 'both', title: 'Both themes' },
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
                <OphThemeProvider variant="oph" lang="fi">
                  <Story />
                </OphThemeProvider>
              </Box>
              <Box>
                <OphThemeProvider variant="opintopolku" lang="fi">
                  <Story />
                </OphThemeProvider>
              </Box>
            </Stack>
          );
        default:
          return (
            <OphThemeProvider variant={theme as 'oph' | 'opintopolku'}>
              <Story />
            </OphThemeProvider>
          );
      }
    },
  ],

  tags: ['autodocs'],
};

export default preview;
