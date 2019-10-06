import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NotificationTrayComponent } from './notification-tray.component';
import { NotificationComponent } from './notification.component';
import { NotificationsStore, createNotification } from './state';

describe('NotificationTrayComponent', () => {
  let component: NotificationTrayComponent;
  let fixture: ComponentFixture<NotificationTrayComponent>;
  let notificationStore: NotificationsStore;
  let dom: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [NotificationTrayComponent, NotificationComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotificationTrayComponent);
    component = fixture.componentInstance;
    dom = fixture.debugElement.nativeElement;

    notificationStore = TestBed.get(NotificationsStore);
    notificationStore.add(
      createNotification({
        message: 'foo',
        title: 'foo title',
        alertClass: 'danger'
      })
    );

    notificationStore.add(
      createNotification({
        message: 'bar',
        title: 'bar title',
        alertClass: 'danger'
      })
    );

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('can render notification components', () => {
    expect(dom.querySelectorAll('lib-notification-component').length).toBe(2);
  });
});
