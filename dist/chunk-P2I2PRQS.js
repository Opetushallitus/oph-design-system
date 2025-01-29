'use client';

import {
  OphFormFieldWrapper
} from "./chunk-LQSENQUB.js";

// src/OphSelect.tsx
import { Select, MenuItem } from "@mui/material";
import { jsx, jsxs } from "react/jsx-runtime";
var OphSelect = ({
  placeholder,
  clearable,
  options,
  ...props
}) => {
  return /* @__PURE__ */ jsxs(Select, { defaultValue: "", displayEmpty: true, ...props, label: null, children: [
    /* @__PURE__ */ jsx(MenuItem, { sx: { display: clearable ? "block" : "none" }, value: "", children: placeholder }),
    options.map(({ value, label }) => {
      return /* @__PURE__ */ jsx(MenuItem, { value, children: label }, value);
    })
  ] });
};
var OphSelectFormField = ({
  required,
  label,
  helperText,
  errorMessage,
  ...props
}) => {
  return /* @__PURE__ */ jsx(
    OphFormFieldWrapper,
    {
      required,
      label,
      helperText,
      errorMessage,
      renderInput: ({ labelId }) => /* @__PURE__ */ jsx(OphSelect, { ...props, labelId })
    }
  );
};

export {
  OphSelect,
  OphSelectFormField
};
//# sourceMappingURL=chunk-P2I2PRQS.js.map