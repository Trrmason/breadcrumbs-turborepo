import { Colors } from "@breadcrumbs/theme/src/types";
import { Animations, WithStyle, WithSvg } from "@breadcrumbs/types/src";

export type Icons =
  | "google"
  | "apple"
  | "mail"
  | "person"
  | "message"
  | "lock"
  | "linkedin"
  | "website"
  | "learn"
  | "scholar"
  | "send"
  | "send-mail"
  | "check"
  | "info"
  | "warning"
  | "error"
  | "simple-exit";

interface Props {
  icon: Icons;
  color?: Colors;
  size?: number;
  animate?: Animations;
}

export type IProps = WithSvg<WithStyle<Props>>;
export type IconProps = WithSvg<WithStyle<{}>>;
