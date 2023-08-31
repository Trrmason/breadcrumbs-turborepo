import React from "react";
import { FlexAlign, FlexDirection, FlexJustify, FlexProps } from "./types";
import classnames from "classnames";

const flexDirectionVariants: Record<FlexDirection, string> = {
  column: "flex-col",
  row: "flex-row",
};

const flexAlignVariants: Record<FlexAlign, string> = {
  center: "items-center",
  end: "items-end",
  baseline: "items-baseline",
  stretch: "items-stretch",
  start: "items-start",
};

const flexJustifyVariants: Record<FlexJustify, string> = {
  center: "justify-center",
  "space-around": "justify-around",
  "space-between": "justify-between",
  "space-evenly": "justify-evenly",
  start: "justify-start",
};

const Flex = ({
  className,
  align = "start",
  direction = "row",
  justify = "start",
  wrap,
  centerChildren,
  ...props
}: FlexProps) => {
  return (
    <div
      className={classnames(
        "flex",
        className,
        centerChildren && "justify-center items-center",
        wrap ? "flex-wrap" : "flex-nowrap",
        flexDirectionVariants[direction],
        !centerChildren && flexAlignVariants[align],
        !centerChildren && flexJustifyVariants[justify]
      )}
      {...props}
    />
  );
};

export default Flex;
