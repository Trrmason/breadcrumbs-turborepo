import React from "react";
import { IconProps } from "../types";

const Icon = ({ ...props }: IconProps) => {
  return (
    <svg
      height="512"
      viewBox="0 0 24 24"
      width="512"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g>
        <circle
          cx="12"
          cy="17"
          r="1"
          transform="matrix(-1 0 0 -1 24 34)"
        ></circle>
        <path d="m11.25 14c0 .4142.3358.75.75.75s.75-.3358.75-.75zm1.5-7c0-.41421-.3358-.75-.75-.75s-.75.33579-.75.75zm8.5 5c0 5.1086-4.1414 9.25-9.25 9.25v1.5c5.9371 0 10.75-4.8129 10.75-10.75zm-9.25 9.25c-5.10863 0-9.25-4.1414-9.25-9.25h-1.5c0 5.9371 4.81294 10.75 10.75 10.75zm-9.25-9.25c0-5.10863 4.14137-9.25 9.25-9.25v-1.5c-5.93706 0-10.75 4.81294-10.75 10.75zm9.25-9.25c5.1086 0 9.25 4.14137 9.25 9.25h1.5c0-5.93706-4.8129-10.75-10.75-10.75zm.75 11.25v-7h-1.5v7z"></path>
      </g>
    </svg>
  );
};

export default Icon;
