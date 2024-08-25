import React from 'react';
import { render } from '@testing-library/react';
import {
  OphThemeProvider,
  type Language,
  type ThemeVariant,
} from './src/theme';

export const createThemeRenderer = (
  themeVariant: ThemeVariant,
  lang: Language,
) => {
  return (ui: React.ReactNode) =>
    render(
      <OphThemeProvider variant={themeVariant} lang={lang}>
        {ui}
      </OphThemeProvider>,
    );
};
