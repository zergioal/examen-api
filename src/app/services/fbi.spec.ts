import { TestBed } from '@angular/core/testing';

import { Fbi } from './fbi';

describe('Fbi', () => {
  let service: Fbi;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Fbi);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
