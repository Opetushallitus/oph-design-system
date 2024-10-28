import { enUS, fiFI, svSE } from '@mui/material/locale';
import type { OphLanguage } from '../types';
import { ophColors } from '../colors';

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

export const focusOutlineStyle = (offset = '1px') => ({
  '&.Mui-focusVisible': {
    outline: `2px solid ${ophColors.black}`,
    outlineOffset: offset,
    zIndex: 9999,
  },
});
