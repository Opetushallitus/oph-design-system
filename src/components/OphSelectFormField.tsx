import {
  OphFormFieldWrapper,
  type OphFormFieldWrapperCommonProps,
} from './OphFormFieldWrapper';
import { OphSelect, type OphSelectProps } from './OphSelect';

export type OphSelectFormFieldProps<T> = OphFormFieldWrapperCommonProps &
  OphSelectProps<T>;

/**
 * Select-component with label and other form field features.
 * [OphSelect](/docs/components-ophselect--docs) and [OphFormFieldWrapper](/docs/utils-ophformfieldwrapper--docs) combined.
 */
export const OphSelectFormField = <T extends string>({
  required,
  label,
  helperText,
  errorMessage,
  ...props
}: OphSelectFormFieldProps<T | ''>) => {
  return (
    <OphFormFieldWrapper
      required={required}
      label={label}
      helperText={helperText}
      errorMessage={errorMessage}
      renderInput={({ labelId }) => <OphSelect {...props} labelId={labelId} />}
    />
  );
};
