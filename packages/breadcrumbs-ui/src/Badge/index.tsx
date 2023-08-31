import React from "react";
import { BadgeProps, BadgeSizes } from "./types";
import classNames from "classnames";

const badgeSizeVariants: Record<BadgeSizes, string> = {
  sm: "after:py-1 after:px-1.5 after:text-xs after:translate-x-4 after:-translate-y-3 after:min-h-[25px] after:min-w-[25px]",
  md: "after:py-1 after:px-2 after:text-sm  after:translate-x-5 after:-translate-y-4 after:min-h-[30px] after:min-w-[30px]",
  lg: "after:py-1 after:px-2.5 after:text-md  after:translate-x-6 after:-translate-y-5 after:min-h-[35px] after:min-w-[35px]",
};

const Badge = ({
  className,
  badgeContent,
  badgeColor = "secondaryBright",
  textColor = "text",
  badgeSize = "sm",
  ...props
}: BadgeProps) => {
  return (
    <div className="relative">
      <span
        {...props}
        content={badgeContent}
        className={classNames(
          className,
          badgeSizeVariants[badgeSize],
          "before:relative after:flex-initial after:absolute  after:z-10 after:rounded-full after:content-[attr(content)] after:text-center font-semibold after:right-0 after:top-0",
          `text-${textColor} after:bg-${badgeColor}`
        )}
      />
    </div>
  );
};

export default Badge;
