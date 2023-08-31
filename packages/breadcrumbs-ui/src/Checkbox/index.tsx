import React from "react";
import { CheckboxProps } from "./types";
import classNames from "classnames";
import Flex from "../Flex";
import Text from "../Text";

const Checkbox = ({
  color = "text",
  textColor = "text",
  textSize = "x-small",
  backgroundColor,
  className,
  label,
  ...props
}: CheckboxProps) => {
  return (
    <Flex align="center">
      <input
        type="checkbox"
        id="checkbox"
        value=""
        className={classNames(
          className,
          `bg-${backgroundColor} text-${color} ring-${color} border-${color} focus:ring-${color}`,
          "w-4 h-4 rounded cursor-pointer"
        )}
        {...props}
      />
      <Text color={textColor} size={textSize} className="ml-2">
        {label}
      </Text>
    </Flex>
  );
};

export default Checkbox;
