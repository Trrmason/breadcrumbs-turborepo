import { Icons } from "breadcrumbs-icons";
import { Colors } from "breadcrumbs-theme";
import { WithButton } from "breadcrumbs-types/src";

export type Sizes = "sm" | "md" | "lg" | "full";
export type Variants = "primary" | "secondary";
export type IconPosition = "start" | "end";

interface Props {
  size?: Sizes;
  variant?: Variants;
  backgroundColor?: Colors;
  textColor?: Colors;
  icon?: Icons;
  iconPosition?: IconPosition;
  animate?: boolean;
}

export type ButtonProps = WithButton<Props>;
