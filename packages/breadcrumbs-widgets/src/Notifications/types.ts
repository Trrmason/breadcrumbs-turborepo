import React from "react";

export type NotificationTypes = "alert";

export interface NotificationsInterface {
  onAddNotification: (
    notification: React.ReactNode,
    notificationType: NotificationTypes,
    key: string
  ) => void;
  onRemoveNotification: (key: string) => void;
}
