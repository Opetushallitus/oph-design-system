import {
  isString
} from "./chunk-E2WEGGYN.js";
import {
  EXTERNAL_LINK_REGEX
} from "./chunk-5VLNADN3.js";

// src/next/LinkBehavior.tsx
import NextLink from "next/link";
import React from "react";
import { jsx } from "react/jsx-runtime";
var LinkBehavior = React.forwardRef(function renderLinkBehavior({ href, children, ...props }, ref) {
  const externalLinkHref = isString(href) && EXTERNAL_LINK_REGEX.test(href) ? href : void 0;
  return externalLinkHref ? /* @__PURE__ */ jsx(
    "a",
    {
      target: "_blank",
      rel: "noopener noreferrer",
      ...props,
      ref,
      href: externalLinkHref,
      children
    }
  ) : /* @__PURE__ */ jsx(NextLink, { ref, ...props, href, children });
});

export {
  LinkBehavior
};
//# sourceMappingURL=chunk-YQYVPFFR.js.map