import { ComponentProps } from "react";

type ArrayItemProps = {
  id: string;
  name: string;
};

type CustomSelectProps = {
  label: string | undefined;
  arr: ArrayItemProps[];
  updateData: (data: string) => void;
};

export type SelectTypes = ComponentProps<"select"> & CustomSelectProps;
