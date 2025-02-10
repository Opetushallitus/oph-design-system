import { useMemo } from 'react';
import type { OphThemeParams } from '../types';
import { createOphTheme } from './createOphTheme';

export const useOphTheme = ({ variant, lang, overrides }: OphThemeParams) =>
  useMemo(
    () => createOphTheme({ variant, lang, overrides }),
    [variant, lang, overrides],
  );
