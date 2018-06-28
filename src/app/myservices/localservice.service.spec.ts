import { TestBed, inject } from '@angular/core/testing';

import { Myservices\localserviceService } from './myservices\localservice.service';

describe('Myservices\localserviceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Myservices\localserviceService]
    });
  });

  it('should be created', inject([Myservices\localserviceService], (service: Myservices\localserviceService) => {
    expect(service).toBeTruthy();
  }));
});
