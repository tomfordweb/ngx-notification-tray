import { ID, guid } from '@datorama/akita';

export interface NotificationModel {
  id: ID;
  message: string;
  title?: string;
  alertClass?: NotificationAlertTypes;
}

export type NotificationAlertTypes =
  | 'primary'
  | 'secondary'
  | 'success'
  | 'warning'
  | 'danger'
  | 'light'
  | 'dark';

export interface NotificationIncoming {
  message: string;
  title?: string;
  alertClass?: NotificationAlertTypes;
}

export function createNotification(notification: NotificationIncoming) {
  return {
    ...notification,
    id: guid()
  } as NotificationModel;
}
