import { ComponentPropsWithoutRef } from "react";

type InputProps = {
  updateData: (data: string) => void;
  placeholder?: string;
  label?: string;
  error?: string;
};

export type InputTypes = ComponentPropsWithoutRef<"input"> & InputProps;
