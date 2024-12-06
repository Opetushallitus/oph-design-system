import * as react from 'react';
import react__default from 'react';
import { ButtonProps, CheckboxProps, FormControlLabelProps, SelectProps, TypographyProps, Theme, LinkOwnProps } from '@mui/material';
import * as react_jsx_runtime from 'react/jsx-runtime';
import { SystemProps } from '@mui/system';
import { OverridableComponent, OverrideProps } from '@mui/material/OverridableComponent';
export { b as OphLanguage, O as OphThemeParams, a as OphThemeVariant } from './types-jg8mpppF.js';

declare const OphButton: react.ForwardRefExoticComponent<Omit<ButtonProps, "ref"> & react.RefAttributes<HTMLButtonElement>>;

type OphCheckboxProps = Omit<CheckboxProps, 'centerRipple' | 'checkedIcon' | 'disableRipple' | 'icon' | 'indeterminateIcon' | 'size' | 'LinkComponent'> & {
    formControlLabelProps?: Omit<FormControlLabelProps, 'label' | 'control'>;
    label?: react__default.ReactNode;
    error?: boolean;
};
declare const OphCheckbox: react__default.ForwardRefExoticComponent<Omit<OphCheckboxProps, "ref"> & react__default.RefAttributes<HTMLButtonElement>>;

type OphSelectValue<T> = SelectProps<T>['value'];
interface OphSelectOption<T> {
    label: string;
    value: OphSelectValue<T>;
}
interface OphSelectProps<T> extends Omit<SelectProps<T>, 'children' | 'label' | 'variant'> {
    options: Array<OphSelectOption<T>>;
    clearable?: boolean;
}
declare const OphSelect: <T extends string>({ placeholder, clearable, options, ...props }: OphSelectProps<T | "">) => react_jsx_runtime.JSX.Element;

type OmittedSystemPropNames = keyof Omit<SystemProps<Theme>, 'color'>;
type OphTypographyProps = Omit<TypographyProps & {
    variant?: 'button' | 'body1' | 'body2' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'label';
}, OmittedSystemPropNames | 'paragraph' | 'variantMapping'>;
declare const OphTypography: react.ForwardRefExoticComponent<Omit<OphTypographyProps, "ref"> & react.RefAttributes<HTMLElement>>;

type OmittedPropNames = keyof SystemProps<Theme> | 'paragraph' | 'TypographyClasses' | 'variantMapping' | 'align' | 'gutterBottom' | 'underline';
interface OphAdditionalLinkProps {
    /** Icon visibility override. If not given, icon visibility is deduced from href (relative links without icon) */
    iconVisible?: boolean;
}
interface OphLinkTypeMap<AdditionalProps = {}, RootComponent extends React.ElementType = 'a'> {
    props: AdditionalProps & Omit<LinkOwnProps, OmittedPropNames>;
    defaultComponent: RootComponent;
}
type MuiOphLinkProps<RootComponent extends React.ElementType = OphLinkTypeMap['defaultComponent'], AdditionalProps = {}> = OverrideProps<OphLinkTypeMap<AdditionalProps, RootComponent>, RootComponent> & {
    component?: React.ElementType;
};
type OphLinkProps<C extends React.ElementType = React.ElementType, D extends React.ElementType = OphLinkTypeMap['defaultComponent']> = {
    component?: C;
} & Omit<MuiOphLinkProps<D, OphAdditionalLinkProps>, 'component'>;
declare const OphLink: OverridableComponent<OphLinkTypeMap<OphLinkProps>>;

declare const ophColors: {
    alias: {
        success: string;
        error: string;
    };
    grey900: string;
    grey800: string;
    grey700: string;
    grey600: string;
    grey500: string;
    grey400: string;
    grey300: string;
    grey200: string;
    grey100: string;
    grey50: string;
    black: string;
    white: string;
    blue1: string;
    blue2: string;
    blue3: string;
    cyan1: string;
    cyan2: string;
    cyan3: string;
    lightBlue1: string;
    lightBlue2: string;
    green1: string;
    green2: string;
    green3: string;
    green4: string;
    green5: string;
    red1: string;
    red2: string;
    orange1: string;
    orange2: string;
    orange3: string;
    orange4: string;
    yellow1: string;
    yellow2: string;
    yellow3: string;
    pink1: string;
    pink2: string;
    purple1: string;
    purple2: string;
    purple3: string;
    purple4: string;
};

export { OphButton, OphCheckbox, OphLink, OphSelect, OphTypography, ophColors };
