import { Icons } from "@breadcrumbs/icons/src/types";
import { Colors } from "@breadcrumbs/theme/src/types";
import { WithButton } from "@breadcrumbs/types/src";

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
