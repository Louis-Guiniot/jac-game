import { TestBed } from '@angular/core/testing';

import { SigninUserService } from './signin-user.service';

describe('SigninUserService', () => {
  let service: SigninUserService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SigninUserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
