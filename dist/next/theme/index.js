"use client";
import {
  EXTERNAL_LINK_REGEX
} from "../../chunk-OXMQNR2S.js";
import {
  OphThemeProvider
} from "../../chunk-BDSQKKJI.js";
import "../../chunk-RRMMUN7Q.js";

// src/next/theme/theme-nextjs.tsx
import { useMemo } from "react";

// src/util.ts
var isString = (value) => typeof value === "string";

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

// src/next/theme/theme-nextjs.tsx
import { Open_Sans } from "next/font/google";
import { deepmerge } from "@mui/utils";
import { jsx as jsx2 } from "react/jsx-runtime";
var LinkBehavior2 = LinkBehavior;
const openSans = Open_Sans({
  weight: ["400", "600", "700"],
  subsets: ["latin"],
  display: "swap"
});
var MUI_NEXTJS_OVERRIDES = {
  typography: {
    fontFamily: openSans.style.fontFamily,
    label: {
      fontFamily: openSans.style.fontFamily
    }
  },
  components: {
    MuiLink: {
      defaultProps: {
        component: LinkBehavior2
      }
    },
    MuiButtonBase: {
      defaultProps: {
        LinkComponent: LinkBehavior2
      }
    }
  }
};
function OphNextJsThemeProvider({
  lang,
  variant,
  overrides,
  children
}) {
  const mergedOverrides = useMemo(
    () => deepmerge(MUI_NEXTJS_OVERRIDES, overrides, { clone: true }),
    [overrides]
  );
  return /* @__PURE__ */ jsx2(OphThemeProvider, { variant, lang, overrides: mergedOverrides, children });
}
export {
  LinkBehavior2 as LinkBehavior,
  MUI_NEXTJS_OVERRIDES,
  OphNextJsThemeProvider,
  openSans
};
//# sourceMappingURL=index.js.map