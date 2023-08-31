import { Icons } from "breadcrumbs-icons";
import { Colors } from "breadcrumbs-theme";
import { WithInput } from "breadcrumbs-types/src";

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
