import { Colors } from "breadcrumbs-theme";
import { WithSpan } from "breadcrumbs-types/src";

export type BadgeSizes = "sm" | "md" | "lg";

interface Props {
  badgeColor?: Colors;
  textColor?: Colors;
  badgeContent?: string;
  badgeSize?: BadgeSizes;
}

export type BadgeProps = WithSpan<Props>;
