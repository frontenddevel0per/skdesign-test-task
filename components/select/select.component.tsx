import { FC, useState } from "react";
import { SelectTypes } from "./select.types";
import styles from "./select.module.scss";

const Select: FC<SelectTypes> = ({
  label = "How did you know about us?",
  arr,
  updateData,
  ...props
}) => {
  const [isOpened, setIsOpened] = useState(false);

  return (
    <div
      className={
        isOpened
          ? `${styles["select-wrapper"]} ${styles.active}`
          : `${styles["select-wrapper"]}`
      }
      onClick={() => setIsOpened(!isOpened)}
    >
      <label className={`${styles["select-label"]}`} htmlFor={props.id}>
        {label}
      </label>
      <div className={`${styles["select-list"]}`} id={props.id}>
        {isOpened &&
          arr.map((item) => (
            <div
              key={item}
              className={`${styles["select-list-item"]}`}
              onClick={() => updateData(item)}
            >
              <p>{item}</p>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Select;
