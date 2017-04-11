import { TestBed, inject, getTestBed } from '@angular/core/testing';

import { BaseHttpService, ServiceLocator } from './base-http.service';
import { Resource } from '../decorators/resource.decorator';
import { BaseModel } from '../models/base.model';
import { Injector } from '@angular/core';
import { AngularFire } from 'angularfire2';

@Resource({
  entity: 'test'
})
class TestBackendService extends BaseHttpService<BaseModel> {
}

const angularFireSpec = {};


describe('BaseHttpService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        TestBackendService,
        Injector,
        { provide: AngularFire, useValue: angularFireSpec }
      ]
    });
    ServiceLocator.injector = getTestBed().get(Injector);
  });

  it('should ...', inject([TestBackendService], (service: TestBackendService) => {
    expect(service).toBeTruthy();
  }));
});
