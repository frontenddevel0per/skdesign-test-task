import { FC } from "react";
import { InputTypes } from "./input-text.types";

const InputText: FC<InputTypes> = ({
  id,
  label,
  placeholder = "Enter the text",
  error,
  ...props
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
        {...props}
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
