import { ReactNode } from "react";

export type ButtonProps = {
  children: ReactNode;
  isDisabled?: boolean;
  isLoading?: boolean;
};
