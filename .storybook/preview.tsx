import React from 'react';
import { virkailijaTheme, oppijaTheme } from '../src/theme';
import { ThemeProvider, styled } from '@mui/material/styles';
import type { Preview } from '@storybook/react';
import { CssBaseline } from '@mui/material';

const ThemeBlock = styled('div')<{ left?: boolean; fill?: boolean }>(({
  left,
  fill,
}) => {
  return {
    position: 'absolute',
    top: 0,
    left: left || fill ? 0 : '50%',
    borderRight: left ? '1px solid grey' : 'none',
    right: left ? '50%' : 0,
    width: fill ? '100%' : '50%',
    textAlign: 'left',
    height: '100%',
    bottom: 0,
    overflow: 'auto',
    padding: '1rem',
  };
});

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
        items: ['OPH', 'Opintopolku', 'Vierekkäin'],
        // Change title based on selected value
        dynamicTitle: true,
      },
    },
  },
  decorators: [
    (Story, { globals }) => {
      const { theme } = globals;
      switch (theme) {
        case 'OPH':
          return (
            <ThemeProvider theme={virkailijaTheme}>
              <CssBaseline />
              <ThemeBlock fill>
                <Story />
              </ThemeBlock>
            </ThemeProvider>
          );
        case 'Opintopolku':
          return (
            <ThemeProvider theme={oppijaTheme}>
              <CssBaseline />
              <ThemeBlock fill>
                <Story />
              </ThemeBlock>
            </ThemeProvider>
          );
        default:
          return (
            <>
              <CssBaseline />
              <ThemeProvider theme={virkailijaTheme}>
                <ThemeBlock left>
                  <Story />
                </ThemeBlock>
              </ThemeProvider>
              <ThemeProvider theme={oppijaTheme}>
                <ThemeBlock>
                  <Story />
                </ThemeBlock>
              </ThemeProvider>
            </>
          );
      }
    },
  ],
};

export default preview;
