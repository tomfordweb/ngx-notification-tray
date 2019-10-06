# NGX Notification Tray

Create and display dismissable notifications for Angular 8. Built with Bootstrap and Akita.

[See me on npmjs.com](https://www.npmjs.com/package/ngx-notification-tray)

## Installation

Run `npm install --save ngx-notification-tray`

Module Installation:

```
import { NotificationTrayModule } from 'ngx-notification-tray';
...

providers: [NotificationTrayModule]

```

Add to component:

```
<lib-notification-tray></lib-notification-tray>

```

## Creating notifications:

In your component or service, load the `NotificationTrayService`

```
constructor(
  private notificationTrayService: NotificationTrayService
)
```

```
this.notificationService.push('test notification');

this.notificationService.push('item saved', 'Title:', 'warning');
```
