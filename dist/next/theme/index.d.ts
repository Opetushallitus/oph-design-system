import * as react_jsx_runtime from 'react/jsx-runtime';
import * as next_dist_compiled__next_font from 'next/dist/compiled/@next/font';
import * as react from 'react';
import * as url from 'url';
import { O as OphThemeParams } from '../../types-jg8mpppF.js';
import '@mui/material';

declare const LinkBehavior: react.ForwardRefExoticComponent<{
    href: string | url.UrlObject;
    as?: string | url.UrlObject;
    replace?: boolean;
    scroll?: boolean;
    shallow?: boolean;
    passHref?: boolean;
    prefetch?: boolean | null;
    locale?: string | false;
    legacyBehavior?: boolean;
    onMouseEnter?: React.MouseEventHandler<HTMLAnchorElement>;
    onTouchStart?: React.TouchEventHandler<HTMLAnchorElement>;
    onClick?: React.MouseEventHandler<HTMLAnchorElement>;
} & {
    children?: react.ReactNode | undefined;
} & react.RefAttributes<HTMLAnchorElement>>;
declare const openSans: next_dist_compiled__next_font.NextFont;
declare const MUI_NEXTJS_OVERRIDES: {
    readonly typography: {
        readonly fontFamily: string;
        readonly label: {
            readonly fontFamily: string;
        };
    };
    readonly components: {
        readonly MuiLink: {
            readonly defaultProps: {
                readonly component: react.ForwardRefExoticComponent<{
                    href: string | url.UrlObject;
                    as?: string | url.UrlObject;
                    replace?: boolean;
                    scroll?: boolean;
                    shallow?: boolean;
                    passHref?: boolean;
                    prefetch?: boolean | null;
                    locale?: string | false;
                    legacyBehavior?: boolean;
                    onMouseEnter?: React.MouseEventHandler<HTMLAnchorElement>;
                    onTouchStart?: React.TouchEventHandler<HTMLAnchorElement>;
                    onClick?: React.MouseEventHandler<HTMLAnchorElement>;
                } & {
                    children?: react.ReactNode | undefined;
                } & react.RefAttributes<HTMLAnchorElement>>;
            };
        };
        readonly MuiButtonBase: {
            readonly defaultProps: {
                readonly LinkComponent: react.ForwardRefExoticComponent<{
                    href: string | url.UrlObject;
                    as?: string | url.UrlObject;
                    replace?: boolean;
                    scroll?: boolean;
                    shallow?: boolean;
                    passHref?: boolean;
                    prefetch?: boolean | null;
                    locale?: string | false;
                    legacyBehavior?: boolean;
                    onMouseEnter?: React.MouseEventHandler<HTMLAnchorElement>;
                    onTouchStart?: React.TouchEventHandler<HTMLAnchorElement>;
                    onClick?: React.MouseEventHandler<HTMLAnchorElement>;
                } & {
                    children?: react.ReactNode | undefined;
                } & react.RefAttributes<HTMLAnchorElement>>;
            };
        };
    };
};
declare function OphNextJsThemeProvider({ lang, variant, overrides, children, }: OphThemeParams & {
    children: React.ReactNode;
}): react_jsx_runtime.JSX.Element;

export { LinkBehavior, MUI_NEXTJS_OVERRIDES, OphNextJsThemeProvider, openSans };
