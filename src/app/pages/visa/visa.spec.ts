import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Visa } from './visa';

describe('Visa', () => {
  let component: Visa;
  let fixture: ComponentFixture<Visa>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Visa]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Visa);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
