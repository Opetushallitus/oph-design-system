import { createTheme } from '@mui/material';
import { EMPTY_OBJECT } from '../common';
import type { OphThemeParams } from '../types';
import { getLocale } from './theme-utils';
import { deepmerge } from '@mui/utils';
import { OPH_THEME_OPTIONS, OPINTOPOLKU_THEME_OPTIONS } from './theme';

export function createOphTheme({
  variant,
  lang,
  overrides = EMPTY_OBJECT,
}: OphThemeParams) {
  const locale = getLocale(lang);
  switch (variant) {
    case 'oph':
      return createTheme(
        deepmerge(OPH_THEME_OPTIONS, overrides, {
          clone: true,
        }),
        { lang },
        locale,
      );
    case 'opintopolku':
      return createTheme(
        deepmerge(OPINTOPOLKU_THEME_OPTIONS, overrides, {
          clone: true,
        }),
        { lang },
        locale,
      );
    default:
      throw Error('Theme variant must be "oph" or "opintopolku"!');
  }
}
