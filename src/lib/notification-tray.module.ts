import { NgModule } from '@angular/core';
import { NotificationTrayComponent } from './notification-tray.component';
import { NotificationComponent } from './notification.component';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  declarations: [NotificationTrayComponent, NotificationComponent],
  imports: [BrowserModule],
  exports: [NotificationTrayComponent]
})
export class NotificationTrayModule {}
