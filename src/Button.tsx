import type { ButtonProps as MuiButtonProps } from '@mui/material';
import MuiButton from '@mui/material/Button';

export interface ButtonProps
  extends Omit<MuiButtonProps, 'endIcon' | 'startIcon' | 'size'> {
  icon?: MuiButtonProps['startIcon'];
}

export const Button = ({ icon, ...rest }: ButtonProps) => {
  return <MuiButton {...rest} startIcon={icon} />;
};
