import { TestBed } from '@angular/core/testing';

import { QueuemanagementService } from './queuemanagement.service';

describe('QueuemanagementService', () => {
  let service: QueuemanagementService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(QueuemanagementService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
