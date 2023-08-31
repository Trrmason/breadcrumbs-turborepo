import { Icons } from "breadcrumbs-icons";
import { Colors } from "breadcrumbs-theme";
import { WithDiv } from "breadcrumbs-types/src";

interface Props {
  color?: Colors;
  icon?: Icons;
  iconSize?: number;
}

export type SkeletonProps = WithDiv<Props>;
