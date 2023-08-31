"use client";

import React, { ReactNode, useState, createContext } from "react";
import { NotificationTypes, NotificationsInterface } from "./types";

export const NotifcationContext = createContext<NotificationsInterface>({
  onAddNotification: () => null,
  onRemoveNotification: () => null,
});

const NotificationsProvider = ({ children }: any) => {
  const [notifications, setNotifications] = useState<
    {
      notification: ReactNode;
      notificationType: NotificationTypes;
      key: string;
    }[]
  >([]);

  const handleAddNotification = (
    notification: ReactNode,
    notificationType: NotificationTypes,
    key: string
  ) => {
    const newNotification = { notification, notificationType, key };
    setNotifications((prev) => [newNotification, ...prev]);
  };

  const handleRemoveNotification = (key: string) => {
    notifications.forEach(
      (notification, i) =>
        notification.key === key && notifications.splice(i, 1)
    );
  };

  return (
    <NotifcationContext.Provider
      value={{
        onAddNotification: handleAddNotification,
        onRemoveNotification: handleRemoveNotification,
      }}
    >
      {notifications.map((notification) => notification.notification)}
      {children}
    </NotifcationContext.Provider>
  );
};

export default NotificationsProvider;
