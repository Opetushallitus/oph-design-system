import {
  EXTERNAL_LINK_REGEX
} from "./chunk-5VLNADN3.js";

// src/OphLink.tsx
import OpenInNew from "@mui/icons-material/OpenInNew";
import { Link } from "@mui/material";
import { forwardRef } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
var OphLink = forwardRef(function renderLink({ iconVisible, children, href, ...rest }, ref) {
  const realIconVisibility = iconVisible ?? (href && EXTERNAL_LINK_REGEX.test(href));
  return /* @__PURE__ */ jsxs(Link, { href, ...rest, ref, children: [
    children,
    realIconVisibility && /* @__PURE__ */ jsx(OpenInNew, { className: "OphLink-OpenInNewIcon" })
  ] });
});

export {
  OphLink
};
//# sourceMappingURL=chunk-5WMMVTJX.js.map