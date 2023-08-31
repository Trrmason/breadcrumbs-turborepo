import {
  AnchorHTMLAttributes,
  ButtonHTMLAttributes,
  CSSProperties,
  HTMLAttributes,
  InputHTMLAttributes,
  ReactNode,
  SVGAttributes,
  TextareaHTMLAttributes,
} from "react";

export type WithChildren<T> = T & { children?: ReactNode };
export type WithStyle<T> = T & {
  style?: CSSProperties;
  className?: React.HTMLAttributes<T>["className"];
};
export type WithAnchor<T> = T & AnchorHTMLAttributes<HTMLAnchorElement>;
export type WithInput<T> = T & InputHTMLAttributes<HTMLInputElement>;
export type WithDiv<T> = T & HTMLAttributes<HTMLDivElement>;
export type WithSvg<T> = T & SVGAttributes<HTMLOrSVGElement>;
export type WithButton<T> = T & ButtonHTMLAttributes<HTMLButtonElement>;
export type WithTextArea<T> = T & TextareaHTMLAttributes<HTMLTextAreaElement>;
export type WithSpan<T> = T & HTMLAttributes<HTMLSpanElement>;
export type Animations = "pulse" | "bounce" | "spin" | "ping";
