import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Fbi } from './fbi';

describe('Fbi', () => {
  let component: Fbi;
  let fixture: ComponentFixture<Fbi>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Fbi]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Fbi);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
