import { ComponentProps } from "react";

type InputProps = {
  id: string;
  placeholder?: string;
  label?: string;
  error?: string;
};

export type InputTypes = ComponentProps<"input"> & InputProps;
