import React from 'react';
import { render } from '@testing-library/react';
import { OphThemeProvider } from './src/theme';
import type { OphLanguage, OphThemeVariant } from './src/types';

export const createThemeRenderer = (
  themeVariant: OphThemeVariant,
  lang: OphLanguage,
) => {
  return (ui: React.ReactNode) =>
    render(
      <OphThemeProvider variant={themeVariant} lang={lang}>
        {ui}
      </OphThemeProvider>,
    );
};
