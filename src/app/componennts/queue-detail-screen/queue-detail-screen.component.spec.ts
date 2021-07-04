import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QueueDetailScreenComponent } from './queue-detail-screen.component';

describe('QueueDetailScreenComponent', () => {
  let component: QueueDetailScreenComponent;
  let fixture: ComponentFixture<QueueDetailScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QueueDetailScreenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QueueDetailScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
