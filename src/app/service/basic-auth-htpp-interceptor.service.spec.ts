import { TestBed } from '@angular/core/testing';

import { BasicAuthHtppInterceptorService } from './basic-auth-htpp-interceptor.service';

describe('BasicAuthHtppInterceptorService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BasicAuthHtppInterceptorService = TestBed.get(BasicAuthHtppInterceptorService);
    expect(service).toBeTruthy();
  });
});
