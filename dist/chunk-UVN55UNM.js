'use client';

// src/OphButton.tsx
import { Button } from "@mui/material";
import { styled } from "@mui/material/styles";
var OphButton = styled(Button)(({ theme, children }) => {
  return children ? {} : {
    //Jos ei lapsia, pienennetään marginaaleja, jotta pelkkä ikoni näkyy hyvin
    "&.MuiButton-root": {
      padding: theme.spacing(0.5),
      margin: 0,
      minWidth: 0,
      flexShrink: 0
    },
    "& .MuiButton-startIcon": {
      margin: 0
    }
  };
});

export {
  OphButton
};
//# sourceMappingURL=chunk-UVN55UNM.js.map