import {
  FontSize,
  FontWeight,
  LetterSpacing,
  LineHeight,
  TextAlign,
  TextDecoration,
} from "./types";

export const fontWeightVariants: Record<FontWeight, string> = {
  bold: "font-bold",
  light: "font-light",
  normal: "font-normal",
  "semi-bold": "font-semibold",
};

export const getSizeVariants = (size: FontSize, responsive: boolean) => {
  switch (size) {
    case "xxx-large":
      return responsive ? `text-6xl md:text-7xl lg:text-8xl` : "text-8xl";
    case "xx-large":
      return responsive ? `text-4xl md:text-5xl lg:text-6xl` : "text-6xl";
    case "x-large":
      return responsive ? `text-2xl md:text-3xl lg:text-4xl` : "text-4xl";
    case "large":
      return responsive ? `text-lg md:text-xl lg:text-2xl` : "text-2xl";
    case "small":
      return responsive ? `text-sm md:text-base` : "text-base";
    case "x-small":
      return "text-sm";
    case "xx-small":
      return "text-xs";
    default:
      return responsive ? `text-base md:text-lg` : "text-lg";
  }
};

// Since font sizes have their own default line heights we have to set the lineheight for each media query as well
export const lineHeightVariants: Record<LineHeight, string> = {
  none: "leading-none md:leading-none lg:leading-none",
  loose: "leading-loose md:leading-loose lg:leading-loose",
  relaxed: "leading-relaxed md:leading-relaxed lg:leading-relaxed",
  snug: "leading-snug md:leading-snug lg:leading-snug",
  tight: "leading-tight md:leading-tight lg:leading-tight",
  normal: "leading-normal md:leading-normal lg:leading-normal",
};

export const letterSpacingVariants: Record<LetterSpacing, string> = {
  tighter: "tracking-tighter",
  tight: "tracking-tight",
  wide: "tracking-wide",
  wider: "tracking-wider",
  widest: "tracking-widest",
  normal: "tracking-normal",
};

export const textAlignVariants: Record<TextAlign, string> = {
  center: "text-center",
  right: "text-right",
  justify: "text-justify",
  start: "text-start",
  end: "text-end",
  left: "text-left",
};

export const textDecorationVariants: Record<TextDecoration, string> = {
  underline: "underline",
  overline: "overline",
  "line-through": "line-through",
  "no-underline": "no-underline",
};
