import { FC } from "react";
import { InputTypes } from "./input-text.types";
import styles from "./input-text.module.scss";

const InputText: FC<InputTypes> = ({
  id,
  label,
  placeholder = "Enter the text",
  error,
  updateData,
  ...props
}) => {
  return (
    <div
      className={
        error
          ? `${styles["input-wrapper"]} ${styles.error}`
          : `${styles["input-wrapper"]}`
      }
    >
      {label && (
        <label className={`${styles["input-label"]}`} htmlFor={id}>
          {label}
        </label>
      )}
      <input
        type="text"
        id={id}
        placeholder={placeholder}
        className={`${styles["custom-input-text"]}`}
        onChange={(e) => updateData(e.target.value)}
        {...props}
      />
      {error && (
        <label className={`${styles["input-error"]}`} htmlFor={id}>
          {error}
        </label>
      )}
    </div>
  );
};

export default InputText;
