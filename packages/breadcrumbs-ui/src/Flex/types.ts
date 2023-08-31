import { WithDiv } from "@breadcrumbs/types/src";

export type FlexDirection = "column" | "row";
export type FlexAlign = "start" | "end" | "center" | "stretch" | "baseline";
export type FlexJustify =
  | "start"
  | "center"
  | "space-between"
  | "space-around"
  | "space-evenly";

export interface Props {
  direction?: FlexDirection;
  align?: FlexAlign;
  justify?: FlexJustify;
  centerChildren?: boolean;
  wrap?: boolean;
}

export type FlexProps = WithDiv<Props>;
