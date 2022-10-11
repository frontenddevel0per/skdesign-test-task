import { FC } from "react";
import { InputTextType } from "./input-text.types";

const InputText: FC<InputTextType> = ({ name, placeholder, isError }) => {
  return (
    <>
      <input
        type="text"
        placeholder={placeholder}
        className="custom-input-text"
      />
    </>
  );
};

export default InputText;
