/**
 * `OphFieldWrapper` is a React component that wraps form fields with additional
 * functionality such as labels, helper text, and error messages.
 * Form fields components in ODS should already be wrapped and have props for adding label etc.
 * Only use this component if you need to show a form field with additional info and it's not already wrapped with OphFieldWrapper.
 *
 * @param {string} [label] - The label text for the form field.
 * @param {string} [helperText] - The helper text displayed below the input field.
 * @param {string} [errorMessage] - The error message displayed below the input field.
 * @param {Function} renderInput - A function that renders the input component. It receives an object with a `labelId` property.
 * @param {Omit<FormControlProps, 'children'>} props - Additional props to be passed to the `FormControl` component.
 *
 * @returns {JSX.Element} The rendered form field wrapper component.
 *
 * @example
 * ```tsx
 * <OphFieldWrapper
 *   label="Username"
 *   helperText="Enter your username"
 *   errorMessage="Username is required"
 *   renderInput={({ labelId }) => <OphInput inputProps={{ 'aria-labelledby': labelId }} />}
 * />
 * ```
 */
'use client';
import {
  FormControl,
  type FormControlProps,
  FormHelperText,
  FormLabel,
} from '@mui/material';
import { useId } from 'react';
import { styled } from '@mui/material/styles';

const StyledFormHelperText = styled(FormHelperText)(({ theme }) => ({
  margin: theme.spacing(0.5, 0),
}));

export interface OphFieldWrapperCommonProps {
  required?: boolean;
  label?: string;
  helperText?: string;
  errorMessage?: string;
}

export interface OphFieldWrapperOwnProps extends OphFieldWrapperCommonProps {
  renderInput: (props: { labelId?: string }) => React.ReactNode;
}

export const OphFormFieldWrapper = ({
  label,
  renderInput,
  helperText,
  errorMessage,
  ...props
}: Omit<FormControlProps, 'children'> & OphFieldWrapperOwnProps) => {
  const id = useId();
  const labelId = label ? `OphFormFieldWrapper-${id}-label` : undefined;
  return (
    <FormControl {...props} error={Boolean(errorMessage) || props.error}>
      {label && (
        <FormLabel id={labelId} error={false}>
          {label}
        </FormLabel>
      )}
      {helperText && (
        <StyledFormHelperText error={false}>{helperText}</StyledFormHelperText>
      )}
      {renderInput({ labelId })}
      {errorMessage && (
        <StyledFormHelperText error={true} key={errorMessage}>
          {errorMessage}
        </StyledFormHelperText>
      )}
    </FormControl>
  );
};
