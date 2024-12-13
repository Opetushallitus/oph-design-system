'use client';

import {
  LinkBehavior
} from "./chunk-YQYVPFFR.js";
import {
  OphThemeProvider
} from "./chunk-T67FNJ7N.js";

// src/next/theme/theme-nextjs.tsx
import { useMemo } from "react";
import { Open_Sans } from "next/font/google";
import { deepmerge } from "@mui/utils";
import { jsx } from "react/jsx-runtime";
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
  return /* @__PURE__ */ jsx(OphThemeProvider, { variant, lang, overrides: mergedOverrides, children });
}

export {
  LinkBehavior2 as LinkBehavior,
  openSans,
  MUI_NEXTJS_OVERRIDES,
  OphNextJsThemeProvider
};
//# sourceMappingURL=chunk-K2P3FLSP.js.map