import { FC } from "react";
import Image from "next/future/image";
import type { ButtonTypes } from "./button.types";

import loadingpng from "../../resources/img/loading.png";

const Button: FC<ButtonTypes> = ({ children, loading = false, ...props }) => {
  return (
    <button
      className={
        props.disabled ? "custom-button disabled" : "custom-button enabled"
      }
      {...props}
    >
      {loading ? <Image src={loadingpng} alt="loadingpng" /> : children}
    </button>
  );
};

export default Button;
