import { TestBed } from '@angular/core/testing';

import { WishServicesService } from './wish-services.service';

describe('WishServicesService', () => {
  let service: WishServicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WishServicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
