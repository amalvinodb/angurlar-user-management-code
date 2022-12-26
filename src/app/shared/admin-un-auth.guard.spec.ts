import { TestBed } from '@angular/core/testing';

import { AdminUnAuthGuard } from './admin-un-auth.guard';

describe('AdminUnAuthGuard', () => {
  let guard: AdminUnAuthGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(AdminUnAuthGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
