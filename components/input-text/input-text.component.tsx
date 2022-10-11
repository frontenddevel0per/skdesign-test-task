import { FC } from "react";
import { InputTextType } from "./input-text.types";

const InputText: FC<InputTextType> = ({
  id,
  label,
  placeholder = "Enter the text",
  error,
}) => {
  return (
    <div className={error ? "input-wrapper error" : "input-wrapper"}>
      {label && (
        <label className="input-label" htmlFor={id}>
          {label}
        </label>
      )}
      <input
        type="text"
        id={id}
        placeholder={placeholder}
        className="custom-input-text"
      />
      {error && (
        <label className="input-error" htmlFor={id}>
          {error}
        </label>
      )}
    </div>
  );
};

export default InputText;
