import React from "react";
import { IProps } from "./types";
import * as icons from "./icons";
import classNames from "classnames";
import { Animations } from "breadcrumbs-types/src";

const animateVariants: Record<Animations, string> = {
  bounce: "animate-bounce",
  pulse: "animate-pulse",
  spin: "animate-spin",
  ping: "animate-ping",
};

const Icon = ({
  icon,
  className,
  size,
  animate,
  color = "text",
  ...props
}: IProps) => {
  const getClass = classNames(
    className,
    `fill-${color}`,
    !size && "w-8 h-8",
    animate && animateVariants[animate]
  );
  if (size) {
    props.width = size;
    props.height = size;
  }

  switch (icon) {
    case "google":
      return <icons.GoogleIcon {...props} className={getClass} />;
    case "apple":
      return <icons.AppleIcon {...props} className={getClass} />;
    case "mail":
      return <icons.MailIcon {...props} className={getClass} />;
    case "message":
      return <icons.MessageIcon {...props} className={getClass} />;
    case "person":
      return <icons.PersonIcon {...props} className={getClass} />;
    case "lock":
      return <icons.Lock {...props} className={getClass} />;
    case "linkedin":
      return <icons.LinkedIn {...props} className={getClass} />;
    case "website":
      return <icons.Website {...props} className={getClass} />;
    case "learn":
      return <icons.Learn {...props} className={getClass} />;
    case "scholar":
      return <icons.Scholar {...props} className={getClass} />;
    case "send":
      return <icons.Send {...props} className={getClass} />;
    case "send-mail":
      return <icons.SendMail {...props} className={getClass} />;
    case "check":
      return <icons.Check {...props} className={getClass} />;
    case "info":
      return <icons.Info {...props} className={getClass} />;
    case "warning":
      return <icons.Warning {...props} className={getClass} />;
    case "error":
      return <icons.Error {...props} className={getClass} />;
    case "simple-exit":
      return <icons.SimpleExit {...props} className={getClass} />;
  }
};

export default Icon;
