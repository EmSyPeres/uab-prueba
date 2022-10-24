import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroesCardsComponent } from './heroes-cards.component';

describe('HeroesCardsComponent', () => {
  let component: HeroesCardsComponent;
  let fixture: ComponentFixture<HeroesCardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeroesCardsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeroesCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
