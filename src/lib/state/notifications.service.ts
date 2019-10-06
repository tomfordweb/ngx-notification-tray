import { Injectable } from '@angular/core';
import { NotificationsStore } from './notifications.store';
import {
  createNotification,
  NotificationAlertTypes
} from './notification.model';
import { ID } from '@datorama/akita';

@Injectable({ providedIn: 'root' })
export class NotificationTrayService {
  constructor(private notificationsStore: NotificationsStore) {}

  push(
    message: string,
    title: string = null,
    alertClass: NotificationAlertTypes = 'primary'
  ) {
    const notification = createNotification({
      message,
      title,
      alertClass
    });
    this.notificationsStore.add(notification);
  }

  delete(id: ID) {
    this.notificationsStore.remove(id);
  }
}
