import React from "react";
import { IconProps } from "../types";

const Icon = ({ ...props }: IconProps) => {
  return (
    <svg
      width="800px"
      height="800px"
      viewBox="0 0 28 32"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M16 15.503A5.041 5.041 0 1 0 16 5.42a5.041 5.041 0 0 0 0 10.083zm0 2.215c-6.703 0-11 3.699-11 5.5v3.363h22v-3.363c0-2.178-4.068-5.5-11-5.5z" />
    </svg>
  );
};

export default Icon;
