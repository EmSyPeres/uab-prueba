import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HereoesSearchComponent } from './hereoes-search.component';

describe('HereoesSearchComponent', () => {
  let component: HereoesSearchComponent;
  let fixture: ComponentFixture<HereoesSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HereoesSearchComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HereoesSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
