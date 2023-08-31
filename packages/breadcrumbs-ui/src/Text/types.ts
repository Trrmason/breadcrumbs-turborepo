import { MouseEventHandler } from "react";
import { WithChildren, WithStyle } from "@breadcrumbs/types/src";
import { Colors } from "@breadcrumbs/theme/src/types";

export type FontWeight = "light" | "normal" | "semi-bold" | "bold";
export type FontSize =
  | "xx-small"
  | "x-small"
  | "small"
  | "medium"
  | "large"
  | "x-large"
  | "xx-large"
  | "xxx-large";

export type LineHeight =
  | "none"
  | "tight"
  | "snug"
  | "normal"
  | "relaxed"
  | "loose";

export type LetterSpacing =
  | "tighter"
  | "tight"
  | "normal"
  | "wide"
  | "wider"
  | "widest";

export type TextAlign =
  | "left"
  | "center"
  | "right"
  | "justify"
  | "start"
  | "end";

export type TextDecoration =
  | "underline"
  | "overline"
  | "line-through"
  | "no-underline";

export interface Props {
  responsive?: boolean;
  weight?: FontWeight;
  size?: FontSize;
  lineHeight?: LineHeight;
  letterSpacing?: LetterSpacing;
  textAlign?: TextAlign;
  textDecoration?: TextDecoration;
  color?: Colors;
  onClick?: MouseEventHandler | undefined;
}

export type TextProps = WithChildren<WithStyle<Props>>;
