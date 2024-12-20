import {
  ophColors
} from "./chunk-LVP2BKUK.js";

// src/theme/theme-utils.tsx
import { enUS, fiFI, svSE } from "@mui/material/locale";
function getLocale(lang) {
  switch (lang) {
    case "fi":
      return fiFI;
    case "sv":
      return svSE;
    case "en":
      return enUS;
    default:
      return fiFI;
  }
}
var focusOutlineStyle = (overrides = {}) => ({
  outline: `2px solid ${ophColors.black}`,
  outlineOffset: "1px",
  zIndex: 9999,
  ...overrides
});

export {
  getLocale,
  focusOutlineStyle
};
//# sourceMappingURL=chunk-XMAEUMNX.js.map