import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllRecipesComponent } from './all-recipes.component';

describe('AllRecipesComponent', () => {
  let component: AllRecipesComponent;
  let fixture: ComponentFixture<AllRecipesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllRecipesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllRecipesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
