import { FC } from "react";
import Image from "next/future/image";
import type { ButtonTypes } from "./button.types";
import styles from "./button.module.scss";

import loadingpng from "../../resources/img/loading.png";

const Button: FC<ButtonTypes> = ({ children, loading = false, ...props }) => {
  return (
    <button
      className={
        props.disabled
          ? `${styles["custom-button"]} ${styles.disabled}`
          : `${styles["custom-button"]} ${styles.enabled}`
      }
      {...props}
    >
      {loading ? <Image src={loadingpng} alt="loadingpng" /> : children}
    </button>
  );
};

export default Button;
