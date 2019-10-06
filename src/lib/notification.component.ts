import { Component, OnInit, Input } from '@angular/core';
import { NotificationTrayService, NotificationModel } from './state';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'lib-notification-component',
  template: `
    <div
      class="alert alert-{{ notification.alertClass }}"
      (click)="hide(notification.id)"
    >
      <strong *ngIf="notification.title">{{ notification.title }}</strong
      >&nbsp;
      <span class="message">{{ notification.message }}</span>
    </div>
  `
})
export class NotificationComponent implements OnInit {
  @Input() notification: NotificationModel;

  constructor(private notificationService: NotificationTrayService) {}
  ngOnInit() {}
  hide(id: string | number) {
    this.notificationService.delete(id);
  }
}
