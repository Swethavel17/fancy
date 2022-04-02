import { TestBed } from '@angular/core/testing';

import { fancyserviceService } from './fancyservice.service';

describe('FancyserviceService', () => {
  let service: fancyserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(fancyserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});