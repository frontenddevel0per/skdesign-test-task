import { FC, useState, useEffect, useRef } from "react";
import { SelectTypes } from "./select.types";
import styles from "./select.module.scss";

const Select: FC<SelectTypes> = ({
  label = "How did you know about us?",
  arr,
  updateData,
  ...props
}) => {
  const selectRef = useRef(null);
  const labelRef = useRef(null);
  const [isOpened, setIsOpened] = useState(false);

  useEffect(() => {
    window?.addEventListener("click", (event) => {
      if (
        event.target !== selectRef.current &&
        event.target !== labelRef.current &&
        isOpened
      ) {
        setIsOpened(false);
      }
    });

    return window?.removeEventListener("click", () => {});
  }, [selectRef, isOpened]);

  return (
    <div
      className={
        isOpened
          ? `${styles["select-wrapper"]} ${styles.active}`
          : `${styles["select-wrapper"]}`
      }
      onClick={() => setIsOpened(!isOpened)}
      ref={selectRef}
    >
      <label
        className={`${styles["select-label"]}`}
        htmlFor={props.id}
        ref={labelRef}
      >
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
