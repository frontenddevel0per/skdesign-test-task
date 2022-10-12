import { FC, useState } from "react";
import { CustomSelectTypes } from "./custom-select.types";

const CustomSelect: FC<CustomSelectTypes & React.ComponentProps<"select">> = ({
  label = "How did you know about us?",
  arr,
  updateData,
  ...props
}) => {
  const [isOpened, setIsOpened] = useState(false);

  return (
    <div
      className={isOpened ? "select-wrapper active" : "select-wrapper"}
      onClick={() => setIsOpened(!isOpened)}
    >
      <label className="select-label" htmlFor={props.id}>
        {label}
      </label>
      <div className="select-list" id={props.id}>
        {isOpened &&
          arr.map((item) => (
            <div
              key={item.id}
              className="select-list-item"
              onClick={() => updateData(item.name)}
            >
              <p>{item.name}</p>
            </div>
          ))}
      </div>
    </div>
  );
};

export default CustomSelect;
