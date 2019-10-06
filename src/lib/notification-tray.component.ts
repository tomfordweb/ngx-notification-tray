import { Component, OnInit } from '@angular/core';
import { NotificationsQuery, NotificationModel } from './state';

@Component({
  selector: 'lib-notification-tray',
  template: `
    <div class="ng-notifications-tray">
      <lib-notification-component
        *ngFor="let notification of notifications"
        [notification]="notification"
      ></lib-notification-component>
    </div>
  `,
  styles: ['./notifications-tray.component.scss']
})
export class NotificationTrayComponent implements OnInit {
  constructor(private notificationsQuery: NotificationsQuery) {}

  public notifications: NotificationModel[];

  ngOnInit() {
    this.notificationsQuery.getActive$.subscribe(notifications => {
      this.notifications = notifications;
      console.log(notifications);
    });
  }
}
