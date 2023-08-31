import React from "react";
import { TextProps } from "./types";
import classNames from "classnames";
import {
  letterSpacingVariants,
  lineHeightVariants,
  getSizeVariants,
  textAlignVariants,
  textDecorationVariants,
  fontWeightVariants,
} from "./theme";

const Text = ({
  className,
  textDecoration,
  weight = "normal",
  size = "medium",
  lineHeight = "normal",
  letterSpacing = "normal",
  textAlign = "left",
  responsive = true,
  color = "text",
  ...props
}: TextProps) => {
  return (
    <p
      className={classNames(
        className,
        fontWeightVariants[weight],
        getSizeVariants(size, responsive),
        lineHeightVariants[lineHeight],
        letterSpacingVariants[letterSpacing],
        textAlignVariants[textAlign],
        textDecoration && textDecorationVariants[textDecoration],
        `text-${color}`
      )}
      {...props}
    />
  );
};

export default Text;
