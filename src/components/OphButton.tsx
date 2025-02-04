'use client';

import { Button } from '@mui/material';
import { styled } from '@mui/material/styles';

export const OphButton = styled(Button)(({ theme, children }) => {
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
}) as typeof Button;
