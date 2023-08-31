import { WithChildren, WithStyle, WithAnchor } from "breadcrumbs-types/src";
import { Props as TextProps } from "../Text/types";

export type Cursor = "default" | "pointer";

interface Props extends TextProps {
  cursor?: Cursor;
  external?: boolean;
}

export type LinkProps = WithChildren<WithStyle<WithAnchor<Props>>>;
