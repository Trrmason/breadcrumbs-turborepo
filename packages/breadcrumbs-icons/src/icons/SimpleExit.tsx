import React from "react";
import { IconProps } from "../types";

const Icon = ({ ...props }: IconProps) => {
  return (
    <svg
      height="512"
      viewBox="0 0 512 512"
      width="512"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g id="_02_User" data-name="02 User">
        <path d="m25 512a25 25 0 0 1 -17.68-42.68l462-462a25 25 0 0 1 35.36 35.36l-462 462a24.93 24.93 0 0 1 -17.68 7.32z"></path>
        <path d="m487 512a24.93 24.93 0 0 1 -17.68-7.32l-462-462a25 25 0 0 1 35.36-35.36l462 462a25 25 0 0 1 -17.68 42.68z"></path>
      </g>
    </svg>
  );
};

export default Icon;
