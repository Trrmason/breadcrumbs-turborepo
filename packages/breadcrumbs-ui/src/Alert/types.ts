import { WithDiv } from "breadcrumbs-types/src";

export type AlertTypes = "success" | "info" | "warning" | "error";

interface Props {
  alertType: AlertTypes;
  message?: string;
  onDismiss?: () => void;
}

export type AlertProps = WithDiv<Props>;
