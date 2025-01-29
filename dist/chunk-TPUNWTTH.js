'use client';

import {
  OphFormFieldWrapper
} from "./chunk-LQSENQUB.js";

// src/OphInput.tsx
import {
  OutlinedInput
} from "@mui/material";
import { forwardRef } from "react";
import { jsx } from "react/jsx-runtime";
var OphInput = forwardRef(
  function renderInput(props, ref) {
    return /* @__PURE__ */ jsx(OutlinedInput, { ...props, ref });
  }
);
var OphInputFormField = forwardRef(function renderInputFormField({ required, inputProps, label, helperText, errorMessage, ...rest }, ref) {
  return /* @__PURE__ */ jsx(
    OphFormFieldWrapper,
    {
      required,
      label,
      helperText,
      errorMessage,
      renderInput: ({ labelId }) => /* @__PURE__ */ jsx(
        OutlinedInput,
        {
          ...rest,
          inputProps: {
            ...inputProps ?? {},
            ...label ? { "aria-labelledby": labelId } : {}
          },
          ref
        }
      )
    }
  );
});

export {
  OphInput,
  OphInputFormField
};
//# sourceMappingURL=chunk-TPUNWTTH.js.map