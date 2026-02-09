import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Billetterie } from './billetterie';

describe('Billetterie', () => {
  let component: Billetterie;
  let fixture: ComponentFixture<Billetterie>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Billetterie]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Billetterie);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
