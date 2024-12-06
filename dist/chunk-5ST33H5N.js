'use client';

// src/OphCheckbox.tsx
import {
  Checkbox,
  FormControlLabel
} from "@mui/material";
import { forwardRef } from "react";
import { jsx } from "react/jsx-runtime";
var OphCheckbox = forwardRef(
  function renderCheckbox({ label, error, formControlLabelProps, ...props }, ref) {
    const checkboxProps = {
      ...props,
      color: error ? "error" : props.color,
      ref
    };
    return label ? /* @__PURE__ */ jsx(
      FormControlLabel,
      {
        ...formControlLabelProps,
        label,
        control: /* @__PURE__ */ jsx(Checkbox, { ...checkboxProps })
      }
    ) : /* @__PURE__ */ jsx(Checkbox, { ...checkboxProps });
  }
);

export {
  OphCheckbox
};
//# sourceMappingURL=chunk-5ST33H5N.js.map