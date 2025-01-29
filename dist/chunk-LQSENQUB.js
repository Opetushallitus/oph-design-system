// src/OphFormFieldWrapper.tsx
import {
  FormControl,
  FormHelperText,
  FormLabel
} from "@mui/material";
import { useId } from "react";
import { styled } from "@mui/material/styles";
import { jsx, jsxs } from "react/jsx-runtime";
var StyledFormHelperText = styled(FormHelperText)(({ theme }) => ({
  margin: theme.spacing(0.5, 0)
}));
var OphFormFieldWrapper = ({
  label,
  renderInput,
  helperText,
  errorMessage,
  ...props
}) => {
  const id = useId();
  const labelId = label ? `OphFormFieldWrapper-${id}-label` : void 0;
  return /* @__PURE__ */ jsxs(FormControl, { ...props, error: Boolean(errorMessage) || props.error, children: [
    label && /* @__PURE__ */ jsx(FormLabel, { id: labelId, error: false, children: label }),
    helperText && /* @__PURE__ */ jsx(StyledFormHelperText, { error: false, children: helperText }),
    renderInput({ labelId }),
    errorMessage && /* @__PURE__ */ jsx(StyledFormHelperText, { error: true, children: errorMessage }, errorMessage)
  ] });
};

export {
  OphFormFieldWrapper
};
//# sourceMappingURL=chunk-LQSENQUB.js.map