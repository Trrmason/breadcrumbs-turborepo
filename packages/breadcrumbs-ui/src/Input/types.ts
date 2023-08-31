import { Icons } from "@breadcrumbs/icons/src/types";
import { Colors } from "@breadcrumbs/theme/src/types";
import { WithInput } from "@breadcrumbs/types/src";

export interface Props {
  backgroundColor?: Colors;
  placeholderColor?: Colors;
  textColor?: Colors;
  borderColor?: Colors;
  label?: string;
  icon?: Icons;
  iconSize?: number;
}

export type InputProps = WithInput<Props>;
