import React from "react";
import { IconProps } from "../types";

const Icon = ({ ...props }: IconProps) => {
  return (
    <svg
      height="512"
      viewBox="0 0 64 64"
      width="512"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="m30 36a2.011 2.011 0 0 1 -.838-.184l-26-12a2 2 0 0 1 0-3.632l26-12a2 2 0 0 1 1.676 0l26 12a2 2 0 0 1 0 3.632l-26 12a2.011 2.011 0 0 1 -.838.184zm-21.228-14 21.228 9.8 21.228-9.8-21.228-9.8z"></path>
      <path d="m56 48a2 2 0 0 1 -2-2v-24a2 2 0 0 1 4 0v24a2 2 0 0 1 -2 2z"></path>
      <path d="m30 50c-9.151 0-19-2.5-19-8v-15a2 2 0 0 1 4 0v15c0 1.161 5.257 4 15 4s15-2.839 15-4v-15a2 2 0 0 1 4 0v15c0 5.5-9.849 8-19 8z"></path>
      <path d="m56 56a6 6 0 1 1 6-6 6.006 6.006 0 0 1 -6 6zm0-8a2 2 0 1 0 2 2 2 2 0 0 0 -2-2z"></path>
    </svg>
  );
};

export default Icon;
