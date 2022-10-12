type ArrayItemProps = {
  id: string;
  name: string;
};

export type CustomSelectTypes = {
  label: string;
  arr: ArrayItemProps[];
  updateData: (data: string) => void;
};
