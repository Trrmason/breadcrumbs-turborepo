import React from "react";
import { InputProps } from "./types";
import classNames from "classnames";
import Flex from "../Flex";
import Text from "../Text";
import {Icon} from "breadcrumbs-icons";

const Input = ({
  className,
  backgroundColor,
  label,
  icon,
  iconSize,
  placeholderColor = "placeholderText",
  textColor = "text",
  borderColor = "border",
  ...props
}: InputProps) => {
  return (
    <Flex className="w-full" direction="column">
      {label && (
        <Text color={textColor} size="small" className="mb-1 ml-[2px]">
          {label}
        </Text>
      )}
      <span className="relative w-full">
        {icon && (
          <Icon
            icon={icon}
            size={iconSize ?? 16}
            className="absolute h-full ml-2"
            color={placeholderColor}
          />
        )}
        <input
          {...props}
          className={classNames(
            className,
            "border w-full rounded-lg focus:border-transparent focus:ring-2",
            `bg-${backgroundColor} placeholder-${placeholderColor} text-${textColor} border-${borderColor} focus:ring-${borderColor}`,
            icon ? "p-[10px] pl-[30px]" : "p-[10px]"
          )}
        />
      </span>
    </Flex>
  );
};

export default Input;
