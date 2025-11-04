import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Dogs } from './dogs';

describe('Dogs', () => {
  let component: Dogs;
  let fixture: ComponentFixture<Dogs>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Dogs]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Dogs);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
