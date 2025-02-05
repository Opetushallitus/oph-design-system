import type { ThemeOptions } from '@mui/material';

/**
 * Supported language codes.
 */
export type OphLanguage = 'fi' | 'sv' | 'en';

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

declare module '@mui/material/styles' {
  interface CustomTypographyVariants {
    label: React.CSSProperties;
  }

  // allow configuration using `createTheme`
  interface CustomTypographyVariantsOptions {
    label?: React.CSSProperties;
  }

  /* eslint-disable-next-line @typescript-eslint/no-empty-object-type */
  interface TypographyVariants extends CustomTypographyVariants {}
  /* eslint-disable-next-line @typescript-eslint/no-empty-object-type */
  interface TypographyVariantsOptions extends CustomTypographyVariants {}

  interface BreakpointOverrides {
    xs: true;
    sm: true;
    md: true;
    lg: true;
    xl: true;
    xxl: true;
  }
}

// Update the Typography's variant prop options
declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides {
    label: true;
    h6: false;
    overline: false;
  }
}
