import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QueueListScreenComponent } from './queue-list-screen.component';

describe('QueueListScreenComponent', () => {
  let component: QueueListScreenComponent;
  let fixture: ComponentFixture<QueueListScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QueueListScreenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QueueListScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
