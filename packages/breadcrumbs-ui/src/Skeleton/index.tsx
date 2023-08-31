import React from "react";
import { SkeletonProps } from "./types";
import classNames from "classnames";
import {Icon} from "breadcrumbs-icons";
import Flex from "../Flex";

const Skeleton = ({
  className,
  icon,
  iconSize,
  color = "skeleton",
  ...props
}: SkeletonProps) => {
  return (
    <Flex
      align="center"
      justify="center"
      {...props}
      className={classNames(
        className,
        "animate-pulse rounded-md",
        `bg-${color}`
      )}
    >
      {icon && <Icon icon={icon} color={color} size={iconSize} />}
    </Flex>
  );
};

export default Skeleton;
