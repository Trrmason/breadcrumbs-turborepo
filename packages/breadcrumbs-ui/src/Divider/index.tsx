import classNames from "classnames";
import React from "react";
import { DividerProps } from "./types";

const Divider = ({ className, color = "border", ...props }: DividerProps) => {
  return (
    <div
      className={classNames(className, "border w-full my-2", `border-${color}`)}
      {...props}
    />
  );
};

export default Divider;
