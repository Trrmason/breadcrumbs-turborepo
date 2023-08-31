import { useCallback, useContext } from "react";
import { NotifcationContext } from "./NotificationContext";
import { NotificationTypes } from "./types";

const useNotification = (
  notification: React.ReactNode,
  notificationType: NotificationTypes,
  key: string
): [() => void, () => void] => {
  const { onAddNotification, onRemoveNotification } =
    useContext(NotifcationContext);
  const onAddNotificationCallback = useCallback(() => {
    onAddNotification(notification, notificationType, key);
  }, [notification, notificationType, key, onAddNotification]);

  const onRemoveNotificationCallback = useCallback(() => {
    onRemoveNotification(key);
  }, [key, onRemoveNotification]);

  return [onAddNotificationCallback, onRemoveNotificationCallback];
};

export default useNotification;
