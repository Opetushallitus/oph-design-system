import {
  OphFormFieldWrapper,
  type OphFormFieldWrapperCommonProps,
} from './OphFormFieldWrapper';
import {
  OphSelectMultiple,
  type OphSelectMultipleProps,
} from '@/src/components/OphSelectMultiple';

export type OphSelectMultipleFormFieldProps<T> =
  OphFormFieldWrapperCommonProps & OphSelectMultipleProps<T>;

/**
 * MultiSelect-component with label and other form field features.
 * [OphSelectMultiple](/docs/components-ophselectmultiple--docs) and [OphFormFieldWrapper](/docs/utils-ophformfieldwrapper--docs) combined.
 */
export const OphSelectMultipleFormField = <T extends string>({
  required,
  label,
  helperText,
  errorMessage,
  sx,
  ...props
}: OphSelectMultipleFormFieldProps<T | ''>) => {
  return (
    <OphFormFieldWrapper
      sx={sx}
      required={required}
      label={label}
      helperText={helperText}
      disabled={props.disabled}
      errorMessage={errorMessage}
      renderInput={({ labelId }) => (
        <OphSelectMultiple {...props} labelId={labelId} />
      )}
    />
  );
};
