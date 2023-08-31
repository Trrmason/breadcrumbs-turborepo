import { Colors } from "@breadcrumbs/theme/src/types";

interface Props {
  userFieldText?: "username" | "email";
  widgetTitle?: string;
  widgetBackgroundColor?: Colors;
  widgetBorderColor?: Colors;
  inputBackgroundColor?: Colors;
  buttonColor?: Colors;
  textColor?: Colors;
  labels?: {
    user: string;
    password: string;
  };
  placeholder?: {
    user: string;
    password: string;
  };
  socialLogin?: boolean;
  signInText?: string;
  signInButtonTextColor?: Colors;
  onUserInput?: (e: any) => void;
  onPasswordInput?: (e: any) => void;
  onRememberMe?: () => void;
  onSignIn?: () => void;
}

export type LoginProps = Props;
