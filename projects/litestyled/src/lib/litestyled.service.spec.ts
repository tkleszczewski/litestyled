import { TestBed } from '@angular/core/testing';

import { LitestyledService } from './litestyled.service';

describe('LitestyledService', () => {
  let service: LitestyledService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LitestyledService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
