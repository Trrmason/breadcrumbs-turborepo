import React from "react";
import { LinkProps } from "./types";
import classNames from "classnames";
import {
  letterSpacingVariants,
  lineHeightVariants,
  getSizeVariants,
  textAlignVariants,
  textDecorationVariants,
  fontWeightVariants,
} from "../Text/theme";

const externalProps: { target: string; rel: string } = {
  target: "_blank",
  rel: "noreferrer noopener",
};

const Link = ({
  className,
  external,
  weight = "normal",
  size = "medium",
  lineHeight = "normal",
  letterSpacing = "normal",
  textAlign = "left",
  textDecoration = "underline",
  cursor = "pointer",
  responsive = true,
  ...props
}: LinkProps) => {
  return (
    <a
      className={classNames(
        className,
        fontWeightVariants[weight],
        getSizeVariants(size, responsive),
        lineHeightVariants[lineHeight],
        letterSpacingVariants[letterSpacing],
        textAlignVariants[textAlign],
        textDecoration && textDecorationVariants[textDecoration],
        cursor === "pointer" ? "cursor-pointer" : "cursor-default"
      )}
      {...(external && externalProps)}
      {...props}
    />
  );
};

export default Link;
