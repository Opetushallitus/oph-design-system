'use client';

import { FormControlLabel, styled } from '@mui/material';
import { focusOutlineStyle } from '../theme/theme-utils';

/**
 * A React component that sets focus outline style to surround both the label and form control
 *
 * **Used in inputs such as CheckBox and Radio where the form control is an icon.**
 */
export const FocusBorderFormControlLabel = styled(FormControlLabel)(() => ({
  position: 'relative',
  borderRadius: '5px',

  '&:focus-within': {
    ...focusOutlineStyle({
      outlineOffset: '-1px',
      borderRadius: '5px',
    }),
    paddingRight: '8px',
  },
  '& .MuiCheckbox-root.Mui-focusVisible, & .MuiRadio-root.Mui-focusVisible': {
    outline: 'none',
    boxShadow: 'none',
  },
}));
