import { ReactNode, ComponentProps } from "react";

type ButtonProps = {
  children: ReactNode;
  disabled?: boolean;
  loading?: boolean;
};

export type ButtonTypes = ComponentProps<"button"> & ButtonProps;
