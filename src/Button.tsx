import {
  Button as MuiButton,
  type ButtonProps as MuiButtonProps,
} from '@mui/material';
import { forwardRef } from 'react';

const PROPS_FROM_MUI_BUTTON = [
  'action',
  'classes',
  'className',
  'children',
  'disabled',
  'focusVisibleClassName',
  'href',
  'onClick',
  'onFocusVisible',
  'ref',
  'startIcon',
  'style',
  'sx',
  'tabIndex',
  'variant',
] as const;

export type ButtonProps = Pick<
  MuiButtonProps,
  (typeof PROPS_FROM_MUI_BUTTON)[number]
>;

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  function Button(props, ref) {
    const filteredProps = Object.fromEntries(
      PROPS_FROM_MUI_BUTTON.map((propName) => [propName, props[propName]]),
    );
    return <MuiButton {...filteredProps} ref={ref} />;
  },
);
