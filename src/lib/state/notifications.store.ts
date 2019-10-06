import { Injectable } from '@angular/core';
import { EntityState, EntityStore, StoreConfig } from '@datorama/akita';
import { NotificationModel } from './notification.model';

export interface NotificationsState extends EntityState<NotificationModel> {}

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'notifications' })
export class NotificationsStore extends EntityStore<NotificationsState> {
  constructor() {
    super();
  }
}
