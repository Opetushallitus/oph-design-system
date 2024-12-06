import * as react_jsx_runtime from 'react/jsx-runtime';
import { Theme } from '@mui/material/styles';
import { ReactNode } from 'react';
import { O as OphThemeParams } from '../types-jg8mpppF.js';
import '@mui/material';

declare function createOphTheme({ variant, lang, overrides, }: OphThemeParams): Theme;
declare const useOphTheme: ({ variant, lang, overrides }: OphThemeParams) => Theme;
declare const OphThemeProvider: ({ variant, lang, overrides, children, }: OphThemeParams & {
    children: ReactNode;
}) => react_jsx_runtime.JSX.Element;

export { OphThemeProvider, createOphTheme, useOphTheme };
