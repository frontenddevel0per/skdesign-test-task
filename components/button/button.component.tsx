import { FC } from "react";
import Image from "next/future/image";
import { ButtonProps } from "./button.types";

import loadingpng from "../../resources/img/loading.png";

const Button: FC<ButtonProps> = ({
  children,
  isDisabled = false,
  isLoading = false,
}) => {
  const classes = isDisabled
    ? "custom-button disabled"
    : "custom-button enabled";
  return (
    <>
      <button className={classes} disabled={isDisabled}>
        {isLoading ? <Image src={loadingpng} alt="loadingpng" /> : children}
      </button>
    </>
  );
};

export default Button;
