import {
  createSvgIcon
} from "./chunk-NF6FGVLU.js";
import {
  EXTERNAL_LINK_REGEX
} from "./chunk-5VLNADN3.js";

// node_modules/@mui/icons-material/esm/OpenInNew.js
import { jsx as _jsx } from "react/jsx-runtime";
var OpenInNew_default = createSvgIcon(/* @__PURE__ */ _jsx("path", {
  d: "M19 19H5V5h7V3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2v-7h-2zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3z"
}), "OpenInNew");

// src/OphLink.tsx
import { Link } from "@mui/material";
import { forwardRef } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
var OphLink = forwardRef(function renderLink({ iconVisible, children, href, ...rest }, ref) {
  const realIconVisibility = iconVisible ?? (href && EXTERNAL_LINK_REGEX.test(href));
  return /* @__PURE__ */ jsxs(Link, { href, ...rest, ref, children: [
    children,
    realIconVisibility && /* @__PURE__ */ jsx(OpenInNew_default, { className: "OphLink-OpenInNewIcon" })
  ] });
});

export {
  OphLink
};
//# sourceMappingURL=chunk-EJOCC66O.js.map