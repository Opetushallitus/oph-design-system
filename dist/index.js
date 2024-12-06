"use client";
import {
  EXTERNAL_LINK_REGEX
} from "./chunk-OXMQNR2S.js";
import {
  createSvgIcon,
  ophColors
} from "./chunk-RRMMUN7Q.js";

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

// src/OphCheckbox.tsx
import {
  Checkbox,
  FormControlLabel
} from "@mui/material";
import { forwardRef as forwardRef2 } from "react";
import { jsx as jsx2 } from "react/jsx-runtime";
var OphCheckbox = forwardRef2(
  function renderCheckbox({ label, error, formControlLabelProps, ...props }, ref) {
    const checkboxProps = {
      ...props,
      color: error ? "error" : props.color,
      ref
    };
    return label ? /* @__PURE__ */ jsx2(
      FormControlLabel,
      {
        ...formControlLabelProps,
        label,
        control: /* @__PURE__ */ jsx2(Checkbox, { ...checkboxProps })
      }
    ) : /* @__PURE__ */ jsx2(Checkbox, { ...checkboxProps });
  }
);

// src/OphSelect.tsx
import { Select, MenuItem } from "@mui/material";
import { jsx as jsx3, jsxs } from "react/jsx-runtime";
var OphSelect = ({
  placeholder,
  clearable,
  options,
  ...props
}) => {
  return /* @__PURE__ */ jsxs(Select, { defaultValue: "", displayEmpty: true, ...props, label: null, children: [
    /* @__PURE__ */ jsx3(MenuItem, { sx: { display: clearable ? "block" : "none" }, value: "", children: placeholder }),
    options.map(({ value, label }) => {
      return /* @__PURE__ */ jsx3(MenuItem, { value, children: label }, value);
    })
  ] });
};

// src/OphTypography.tsx
import { Typography } from "@mui/material";
import { forwardRef as forwardRef3 } from "react";
import { jsx as jsx4 } from "react/jsx-runtime";
var OphTypography = forwardRef3(
  function renderTypography(props, ref) {
    return /* @__PURE__ */ jsx4(Typography, { ...props, ref });
  }
);

// node_modules/@mui/icons-material/esm/OpenInNew.js
import { jsx as _jsx } from "react/jsx-runtime";
var OpenInNew_default = createSvgIcon(/* @__PURE__ */ _jsx("path", {
  d: "M19 19H5V5h7V3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2v-7h-2zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3z"
}), "OpenInNew");

// src/OphLink.tsx
import { Link } from "@mui/material";
import { forwardRef as forwardRef4 } from "react";
import { jsx as jsx5, jsxs as jsxs2 } from "react/jsx-runtime";
var OphLink = forwardRef4(function renderLink({ iconVisible, children, href, ...rest }, ref) {
  const realIconVisibility = iconVisible ?? (href && EXTERNAL_LINK_REGEX.test(href));
  return /* @__PURE__ */ jsxs2(Link, { href, ...rest, ref, children: [
    children,
    realIconVisibility && /* @__PURE__ */ jsx5(OpenInNew_default, { className: "OphLink-OpenInNewIcon" })
  ] });
});
export {
  OphButton,
  OphCheckbox,
  OphLink,
  OphSelect,
  OphTypography,
  ophColors
};
//# sourceMappingURL=index.js.map