import type { ThemeOptions } from '@mui/material';
import type { OphLanguage } from '../types';

export type OphThemeVariant = 'oph' | 'opintopolku';

export interface OphThemeParams {
  /**
   * The theme variant to use. Affects colors.
   */
  variant: OphThemeVariant;
  /**
   * Language used for internal translations of components.
   */
  lang?: OphLanguage;
  /**
   * Overrides for theme options.
   */
  overrides?: ThemeOptions;
}
