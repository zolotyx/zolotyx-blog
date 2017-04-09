import { TestBed, inject } from '@angular/core/testing';

import { BaseHttpService } from './base-http.service';

describe('BaseHttpService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BaseHttpService]
    });
  });

  it('should ...', inject([BaseHttpService], (service: BaseHttpService) => {
    expect(service).toBeTruthy();
  }));
});
