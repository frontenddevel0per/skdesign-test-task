import { ComponentProps } from "react";

type CustomSelectProps = {
  label: string | undefined;
  arr: string[];
  updateData: (data: string) => void;
};

export type SelectTypes = ComponentProps<"select"> & CustomSelectProps;
