import { ReactNode, ComponentPropsWithoutRef } from "react";

type ButtonProps = {
  children: ReactNode;
  loading?: boolean;
};

export type ButtonTypes = ComponentPropsWithoutRef<"button"> & ButtonProps;
