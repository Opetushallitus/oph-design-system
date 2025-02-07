'use client';

import { Button } from '@mui/material';
import { styled } from '@mui/material/styles';

/**
 * A Button component based on [MUI Button](https://mui.com/material-ui/api/button/).
 */
export const OphButton = styled(Button)(({ theme, children }) => {
  return children
    ? {}
    : {
        //If no children, reduce margins and padding so the lone icon looks better
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
}) as typeof Button;
