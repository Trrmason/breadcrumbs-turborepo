import { Icons } from "@breadcrumbs/icons/src/types";
import { Colors } from "@breadcrumbs/theme/src/types";
import { WithDiv } from "@breadcrumbs/types/src";

interface Props {
  color?: Colors;
  icon?: Icons;
  iconSize?: number;
}

export type SkeletonProps = WithDiv<Props>;
