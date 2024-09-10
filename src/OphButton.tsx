import {
  Button as MuiButton,
  type ButtonProps as MuiButtonProps,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import { forwardRef } from 'react';

export type ButtonProps = Pick<
  MuiButtonProps,
  | 'action'
  | 'classes'
  | 'className'
  | 'children'
  | 'disabled'
  | 'focusVisibleClassName'
  | 'href'
  | 'onClick'
  | 'onFocusVisible'
  | 'ref'
  | 'startIcon'
  | 'style'
  | 'sx'
  | 'tabIndex'
  | 'variant'
>;

const StyledButton = styled(MuiButton)(({ theme, children }) => {
  return children
    ? {}
    : {
        //Jos ei lapsia, pienennetään marginaaleja, jotta pelkkä ikoni näkyy hyvin
        '&.MuiButton-root': {
          padding: theme.spacing(0.5),
          margin: 0,
          minWidth: 0,
          flexShrink: 0,
        },
        '& .MuiButton-startIcon': {
          margin: 0,
        },
      };
});

export const OphButton = forwardRef<HTMLButtonElement, ButtonProps>(
  function renderButton(props, ref) {
    return <StyledButton {...props} ref={ref} />;
  },
);
