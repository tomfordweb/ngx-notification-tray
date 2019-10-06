# NGX Notification Tray

Create and display dismissable notifications for Angular 8. Built with Bootstrap and Akita.

[See me on npmjs.com](https://www.npmjs.com/package/ngx-notification-tray)

## Installation

Run `npm install --save ngx-notification-tray`

1. Add `NotificationTrayModule` to your app.

2. Add `lib-notification-tray` where you would like the component to display.

3. Install bootstrap (or bootstrap alert CSS) if desired.

4. Create notifications.

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
