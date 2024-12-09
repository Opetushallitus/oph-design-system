import * as react_jsx_runtime from 'react/jsx-runtime';
import { SelectProps } from '@mui/material';

type OphSelectValue<T> = SelectProps<T>['value'];
interface OphSelectOption<T> {
    label: string;
    value: OphSelectValue<T>;
}
interface OphSelectProps<T> extends Omit<SelectProps<T>, 'children' | 'label' | 'variant'> {
    options: Array<OphSelectOption<T>>;
    clearable?: boolean;
    placeholder?: string;
}
declare const OphSelect: <T extends string>({ placeholder, clearable, options, ...props }: OphSelectProps<T | "">) => react_jsx_runtime.JSX.Element;

export { OphSelect, type OphSelectOption, type OphSelectProps, type OphSelectValue };
