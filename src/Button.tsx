import React from "react";
import { ButtonProps, Button as MuiButton } from "@mui/material";

export const Button = (props: ButtonProps) => {
  return <MuiButton {...props} />;
};
