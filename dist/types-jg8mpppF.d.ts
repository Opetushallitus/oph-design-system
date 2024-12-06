import { ThemeOptions } from '@mui/material';

type OphLanguage = 'fi' | 'sv' | 'en';
type OphThemeVariant = 'oph' | 'opintopolku';
interface OphThemeParams {
    variant: OphThemeVariant;
    lang?: OphLanguage;
    overrides?: ThemeOptions;
}
declare module '@mui/material/styles' {
    interface CustomTypographyVariants {
        label: React.CSSProperties;
    }
    interface CustomTypographyVariantsOptions {
        label?: React.CSSProperties;
    }
    interface TypographyVariants extends CustomTypographyVariants {
    }
    interface TypographyVariantsOptions extends CustomTypographyVariants {
    }
    interface BreakpointOverrides {
        xs: true;
        sm: true;
        md: true;
        lg: true;
        xl: true;
        xxl: true;
    }
}
declare module '@mui/material/Typography' {
    interface TypographyPropsVariantOverrides {
        label: true;
        h6: false;
        overline: false;
    }
}

export type { OphThemeParams as O, OphThemeVariant as a, OphLanguage as b };
