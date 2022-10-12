import { ComponentProps } from "react";

type InputProps = {
  id: string;
  updateData: (data: string) => void;
  placeholder?: string;
  label?: string;
  error?: string;
};

export type InputTypes = ComponentProps<"input"> & InputProps;
