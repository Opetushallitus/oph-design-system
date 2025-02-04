import { enUS, fiFI, svSE } from '@mui/material/locale';
import type { OphLanguage } from '../types';
import { ophColors } from '../ophColors';
import type { CSSProperties } from 'react';

export function getLocale(lang?: OphLanguage) {
  switch (lang) {
    case 'fi':
      return fiFI;
    case 'sv':
      return svSE;
    case 'en':
      return enUS;
    default:
      return fiFI;
  }
}

export const focusOutlineStyle = (overrides: CSSProperties = {}) => ({
  outline: `2px solid ${ophColors.black}`,
  outlineOffset: '1px',
  zIndex: 9999,
  ...overrides,
});
