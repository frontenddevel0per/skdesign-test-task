import { FC } from "react";
import Image from "next/future/image";
import type { ButtonTypes } from "./button.types";
import { StyledButton } from "./button.styled";

import loadingpng from "../../resources/img/loading.png";

const Button: FC<ButtonTypes> = ({ children, loading = false, ...props }) => {
  return (
    <StyledButton {...props}>
      {loading ? <Image src={loadingpng} alt="loadingpng" /> : children}
    </StyledButton>
  );
};

export default Button;
