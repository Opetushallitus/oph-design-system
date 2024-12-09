'use client';

// src/OphButton.tsx
import { Button } from "@mui/material";
import { styled } from "@mui/material/styles";
import { forwardRef } from "react";
import { jsx } from "react/jsx-runtime";
var StyledButton = styled(Button)(({ theme, children }) => {
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
var OphButton = forwardRef(
  function renderButton(props, ref) {
    return /* @__PURE__ */ jsx(StyledButton, { ...props, ref });
  }
);

export {
  OphButton
};
//# sourceMappingURL=chunk-I6Q3HL34.js.map