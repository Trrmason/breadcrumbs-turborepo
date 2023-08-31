import { Colors } from "@breadcrumbs/theme/src/types";
import { WithInput } from "@breadcrumbs/types/src";
import { FontSize } from "../Text/types";

interface Props {
  label?: string;
  color?: Colors;
  backgroundColor?: Colors;
  textSize?: FontSize;
  textColor?: Colors;
}

export type CheckboxProps = WithInput<Props>;
