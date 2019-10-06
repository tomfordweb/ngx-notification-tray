import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NotificationComponent } from './notification.component';
import {
  NotificationsStore,
  createNotification,
  NotificationModel
} from './state';

describe('NotificationComponent', () => {
  let component: NotificationComponent;
  let fixture: ComponentFixture<NotificationComponent>;
  let notificationStore: NotificationsStore;
  let dom: HTMLElement;
  let notification: NotificationModel;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [NotificationComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotificationComponent);
    component = fixture.componentInstance;
    dom = fixture.debugElement.nativeElement;

    notificationStore = TestBed.get(NotificationsStore);

    notification = createNotification({
      message: 'foo',
      title: 'foo title',
      alertClass: 'danger'
    });

    notificationStore.add(notification);
    component.notification = notification;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render a title', () => {
    const title = dom.querySelector('strong');
    console.log('test');
    expect(title.textContent).toBe('foo title');
  });

  it('should render without a title', () => {
    notification = createNotification({
      message: 'foo',
      alertClass: 'danger'
    });
    component.notification = notification;
    fixture.detectChanges();

    const title = dom.querySelector('strong');
    expect(title).toBe(null);
  });

  it('should render the message', () => {
    const message = dom.querySelector('.message');

    expect(message.textContent).toBe('foo');
  });

  it('should render the alert class', () => {
    const div = dom.querySelector('div');

    expect(div.classList).toContain('alert-danger');
  });

  it('can delete the notification', async(() => {
    spyOn(component, 'hide');
    const el = fixture.debugElement.nativeElement.querySelector('div');
    el.click();

    fixture.whenStable().then(() => {
      expect(component.hide).toHaveBeenCalled();
    });
  }));
});
