import { TestBed } from '@angular/core/testing';

import { ValidateUserResolver } from './validate-user.resolver';

describe('ValidateUserResolver', () => {
  let resolver: ValidateUserResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(ValidateUserResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
