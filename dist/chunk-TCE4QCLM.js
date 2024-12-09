'use client';

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

export {
  OphSelect
};
//# sourceMappingURL=chunk-TCE4QCLM.js.map