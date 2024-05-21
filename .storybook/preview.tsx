import { virkailijaTheme, oppijaTheme } from '../src/theme';
import { CssBaseline } from '@mui/material';
import { ThemeProvider, styled } from '@mui/material/styles';
import type { Preview } from '@storybook/react';

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  globalTypes: {
    theme: {
      description: 'Theme',
      defaultValue: 'side-by-side',
      toolbar: {
        // The label to show for this toolbar item
        title: 'Theme',
        icon: 'circlehollow',
        // Array of plain string values or MenuItem shape (see below)
        items: [
          { value: 'oph', right: '🔵', title: 'OPH' },
          { value: 'opintopolku', right: '🟢', title: 'Opintopolku' },
          { value: 'both', right: '🔵🟢', title: 'Molemmat' },
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
        case 'oph':
          return (
            <ThemeProvider theme={virkailijaTheme}>
              <CssBaseline />
              <Story />
            </ThemeProvider>
          );
        case 'opintopolku':
          return (
            <ThemeProvider theme={oppijaTheme}>
              <CssBaseline />
              <Story />
            </ThemeProvider>
          );
        default:
          return (
            <>
              <CssBaseline />
              <ThemeProvider theme={virkailijaTheme}>
                  <Story />
              </ThemeProvider>
              <hr style={{margin : '1rem 0'}}/>
              <ThemeProvider theme={oppijaTheme}>
                  <Story />
              </ThemeProvider>
            </>
          );
      }
    },
  ],
};

export default preview;
