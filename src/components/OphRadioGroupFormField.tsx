'use client';
import {
  OphFormFieldWrapper,
  type OphFormFieldWrapperProps,
} from './OphFormFieldWrapper';
import { OphRadioGroup, type OphRadioGroupProps } from './OphRadioGroup';

export type OphRadioGroupFormFieldProps<T> = Omit<
  OphFormFieldWrapperProps,
  'renderInput'
> &
  Omit<OphRadioGroupProps<T>, 'labelId'>;
/**
 * RadioGroup-component with label and other form field features.
 * [OphRadioGroup](/docs/components-ophradiogroup--docs) and [OphFormFieldWrapper](/docs/utils-ophformfieldwrapper--docs) combined.
 */
export const OphRadioGroupFormField = <T extends string>({
  required,
  label,
  helperText,
  errorMessage,
  sx,
  ...props
}: OphRadioGroupFormFieldProps<T | ''>) => {
  return (
    <OphFormFieldWrapper
      sx={sx}
      required={required}
      label={label}
      helperText={helperText}
      errorMessage={errorMessage}
      renderInput={({ labelId }) => (
        <OphRadioGroup {...props} labelId={labelId} />
      )}
    />
  );
};
