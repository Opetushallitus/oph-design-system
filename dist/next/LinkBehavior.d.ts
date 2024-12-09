import * as url from 'url';
import react__default from 'react';

declare const LinkBehavior: react__default.ForwardRefExoticComponent<{
    href: string | url.UrlObject;
    as?: string | url.UrlObject;
    replace?: boolean;
    scroll?: boolean;
    shallow?: boolean;
    passHref?: boolean;
    prefetch?: boolean | null;
    locale?: string | false;
    legacyBehavior?: boolean;
    onMouseEnter?: react__default.MouseEventHandler<HTMLAnchorElement>;
    onTouchStart?: react__default.TouchEventHandler<HTMLAnchorElement>;
    onClick?: react__default.MouseEventHandler<HTMLAnchorElement>;
} & {
    children?: react__default.ReactNode | undefined;
} & react__default.RefAttributes<HTMLAnchorElement>>;

export { LinkBehavior };
