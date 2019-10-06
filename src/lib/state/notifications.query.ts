import { Injectable } from '@angular/core';
import { QueryEntity } from '@datorama/akita';
import { NotificationsStore, NotificationsState } from './notifications.store';

@Injectable({ providedIn: 'root' })
export class NotificationsQuery extends QueryEntity<NotificationsState> {
  getActive$ = this.selectAll();
  constructor(protected store: NotificationsStore) {
    super(store);
  }
}
