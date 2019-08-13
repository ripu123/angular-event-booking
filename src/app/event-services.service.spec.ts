import { TestBed } from '@angular/core/testing';

import { EventServicesService } from './event-services.service';

describe('EventServicesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EventServicesService = TestBed.get(EventServicesService);
    expect(service).toBeTruthy();
  });
});
