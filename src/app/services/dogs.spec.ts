import { TestBed } from '@angular/core/testing';

import { Dogs } from './dogs';

describe('Dogs', () => {
  let service: Dogs;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Dogs);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
