import { Alert } from '@mui/material';
import { OphThemeProvider, type Language } from './theme';
import { render, screen } from '@testing-library/react';
import { expect, test, describe } from 'vitest';

describe('Theme renders Alert with localized text', () => {
  test.each([
    ['fi', 'Sulje'],
    ['sv', 'Stäng'],
    ['en', 'Close'],
  ])('%s', (lang, closeText) => {
    render(
      <OphThemeProvider variant="oph" lang={lang as Language}>
        <Alert onClose={() => {}}></Alert>
      </OphThemeProvider>,
    );
    expect(screen.getByRole('button', { name: closeText })).toBeVisible();
  });
});
