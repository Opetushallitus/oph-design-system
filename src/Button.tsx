import {
  ButtonProps as MuiButtonProps,
  Button as MuiButton,
} from '@mui/material';

type ButtonProps = Omit<MuiButtonProps, 'endIcon' | 'startIcon'> & {
  icon?: MuiButtonProps['startIcon'];
};

export const Button = ({ icon, ...rest }: ButtonProps) => {
  return <MuiButton {...rest} startIcon={icon} />;
};
