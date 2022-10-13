import { FC, useState, useEffect, useRef } from "react";
import Image from "next/future/image";
import { SelectTypes } from "./select.types";
import {
  SelectWrapper,
  NameLabel,
  DropDown,
  DropDownItem,
  Text,
} from "./select.styled";
import arrowicon from "../../resources/img/arrow-icon.png";

const Select: FC<SelectTypes> = ({
  label = "How did you know about us?",
  arr,
  updateData,
  ...props
}) => {
  const selectRef = useRef(null);
  const labelRef = useRef(null);
  const [isOpened, setIsOpened] = useState(false);

  const otherAreaClick = (event: MouseEvent) => {
    if (
      event.target !== selectRef.current &&
      event.target !== labelRef.current &&
      isOpened
    ) {
      setIsOpened(false);
    }
  };

  useEffect(() => {
    window?.addEventListener("click", (event) => otherAreaClick(event));
    return window?.removeEventListener("click", (event) =>
      otherAreaClick(event)
    );
  }, [selectRef, isOpened]);

  return (
    <SelectWrapper
      onClick={() => setIsOpened(!isOpened)}
      isOpened={isOpened}
      ref={selectRef}
    >
      <NameLabel htmlFor={props.id} isOpened={isOpened} ref={labelRef}>
        {label}
      </NameLabel>
      <Image src={arrowicon} alt="arrow-icon" />
      <DropDown id={props.id} isOpened={isOpened}>
        {isOpened &&
          arr.map((item) => (
            <DropDownItem key={item} onClick={() => updateData(item)}>
              <Text>{item}</Text>
            </DropDownItem>
          ))}
      </DropDown>
    </SelectWrapper>
  );
};

export default Select;
