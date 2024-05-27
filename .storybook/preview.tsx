import { virkailijaTheme, oppijaTheme } from '../src/next/theme';
import { Box, CssBaseline } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import type { Preview } from '@storybook/react';

const preview: Preview = {
  parameters: {
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
  },
  globalTypes: {
    theme: {
      description: 'Theme',
      defaultValue: 'both',
      toolbar: {
        // The label to show for this toolbar item
        title: 'Theme',
        icon: 'circlehollow',
        // Array of plain string values or MenuItem shape (see below)
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
            <>
              <CssBaseline />
              <ThemeProvider theme={virkailijaTheme}>
                <Story />
              </ThemeProvider>
              <Box margin={2}></Box>
              <ThemeProvider theme={oppijaTheme}>
                <Story />
              </ThemeProvider>
            </>
          );
        default:
          return (
            <ThemeProvider
              theme={theme === 'opintopolku' ? oppijaTheme : virkailijaTheme}
            >
              <CssBaseline />
              <Story />
            </ThemeProvider>
          );
      }
    },
  ],
};

export default preview;
