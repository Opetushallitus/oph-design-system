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

export interface OphFormFieldWrapperCommonProps {
  /**
   * If true, the label will indicate that the input is required.
   */
  required?: boolean;
  /**
   * The label text show above the input
   */
  label?: string;
  /**
   * The helper text shown below the input
   */
  helperText?: string;
  /**
   * An error message shown after the input. If defined also sets the field and label in error state (red).
   */
  errorMessage?: string;
}

export interface OphFormFieldWrapperOwnProps
  extends OphFormFieldWrapperCommonProps {
  /**
   * Function that renders the input. LabelId is the ID of the label element and can be passed to "aria-labelledby"-attribute.
   */
  renderInput: (props: { labelId?: string }) => React.ReactNode;
}

export type OphFormFieldWrapperProps = OphFormFieldWrapperOwnProps &
  Omit<
    FormControlProps,
    | 'children'
    | 'color'
    | 'hiddenLabel'
    | 'size'
    | 'variant'
    | 'margin'
    | 'component'
  >;

/**
 * A React component that wraps an input field with additional functionality such as labels, helper text and error messages.
 * Components which have a name ending with "FormField" in ODS are already wrapped in OphFormFieldWrapper internally.
 *
 * **Only use this component when you need to add form field UI fragments for your input and it is not already wrapped in OphFormFieldWrapper.**
 */
export const OphFormFieldWrapper = ({
  label,
  renderInput,
  helperText,
  errorMessage,
  ...props
}: OphFormFieldWrapperProps) => {
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
