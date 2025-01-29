import * as react_jsx_runtime from 'react/jsx-runtime';
import { FormControlProps } from '@mui/material';

interface OphFieldWrapperCommonProps {
    required?: boolean;
    label?: string;
    helperText?: string;
    errorMessage?: string;
}
interface OphFieldWrapperOwnProps extends OphFieldWrapperCommonProps {
    renderInput: (props: {
        labelId?: string;
    }) => React.ReactNode;
}
declare const OphFormFieldWrapper: ({ label, renderInput, helperText, errorMessage, ...props }: Omit<FormControlProps, "children"> & OphFieldWrapperOwnProps) => react_jsx_runtime.JSX.Element;

export { type OphFieldWrapperCommonProps, type OphFieldWrapperOwnProps, OphFormFieldWrapper };
