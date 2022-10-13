import { FC } from "react";
import { NameLabel, ErrorLabel, Input, StyledInput } from "./input-text.styled";
import { InputTypes } from "./input-text.types";

const InputText: FC<InputTypes> = ({
  label,
  placeholder = "Enter the text",
  error,
  updateData,
  ...props
}) => {
  return (
    <StyledInput>
      {label && (
        <NameLabel id="name-label" htmlFor={props.id} error={!!error}>
          {label}
        </NameLabel>
      )}
      <Input
        type="text"
        id={props.id}
        placeholder={placeholder}
        onChange={(e) => updateData(e.target.value)}
        error={!!error}
        {...props}
      />
      {error && (
        <ErrorLabel id="error-label" htmlFor={props.id}>
          {error}
        </ErrorLabel>
      )}
    </StyledInput>
  );
};

export default InputText;
