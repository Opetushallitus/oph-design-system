'use client';

import { OutlinedInput } from '@mui/material';
import { forwardRef } from 'react';
import {
  OphFormFieldWrapper,
  type OphFormFieldWrapperCommonProps,
} from './OphFormFieldWrapper';
import type { OphInputProps } from './OphInput';

export type OphInputFormFieldProps = OphInputProps &
  OphFormFieldWrapperCommonProps;

/**
 * Input-component with label and other form field features.
 * [OphInput](/docs/components-ophinput--docs) and [OphFormFieldWrapper](/docs/utils-ophformfieldwrapper--docs) combined.
 */
export const OphInputFormField = forwardRef<
  HTMLInputElement,
  OphInputFormFieldProps
>(function renderInputFormField(
  { sx, required, inputProps, label, helperText, errorMessage, ...rest },
  ref,
) {
  return (
    <OphFormFieldWrapper
      sx={sx}
      required={required}
      label={label}
      helperText={helperText}
      errorMessage={errorMessage}
      renderInput={({ labelId }) => (
        <OutlinedInput
          {...rest}
          inputProps={{
            ...(inputProps ?? {}),
            ...(label ? { 'aria-labelledby': labelId } : {}),
          }}
          ref={ref}
        />
      )}
    />
  );
});
