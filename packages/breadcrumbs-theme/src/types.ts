export enum MediaSizes {
  XSM = "xsm",
  SM = "sm",
  MD = "md",
  LG = "lg",
  XL = "xl",
}

export type Colors =
  | "primary"
  | "primaryBright"
  | "primaryDark"
  | "secondary"
  | "secondaryBright"
  | "secondaryDark"
  | "background"
  | "backgroundBright"
  | "backgroundDark"
  | "text"
  | "error"
  | "success"
  | "warning"
  | "placeholderText"
  | "border"
  | "input"
  | "button"
  | "white"
  | "black"
  | "skeleton"
  | "info";

export type ColorTheme = Record<Colors, string>;
