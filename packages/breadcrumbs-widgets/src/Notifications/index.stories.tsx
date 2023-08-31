import { withReactContext } from "storybook-react-context";
import useNotification from "./useNotification";
import Button from "../../components/Button";
import React from "react";
import Alert from "../../components/Alert";
import { NotifcationContext } from "./NotificationContext";

const meta = {
  title: "Widgets/Notifications",
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;

export const Desktop = {
  title: "Some",
  component: Alert,
  decorators: [
    withReactContext({
      Context: NotifcationContext,
    }),
  ],
  paramaters: {
    notification: <Alert alertType="success" />,
    notificationType: "alert",
    key: "alert-1",
  },
  render: (args) => <Button icon="apple">as</Button>,
};
