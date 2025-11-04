import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Marvel } from './marvel';

describe('Marvel', () => {
  let component: Marvel;
  let fixture: ComponentFixture<Marvel>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Marvel]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Marvel);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
