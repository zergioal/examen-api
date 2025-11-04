import { TestBed } from '@angular/core/testing';

import { Marvel } from './marvel';

describe('Marvel', () => {
  let service: Marvel;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Marvel);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
