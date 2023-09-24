import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TourPlanComponent } from './tour-plan.component';

describe('TourPlanComponent', () => {
  let component: TourPlanComponent;
  let fixture: ComponentFixture<TourPlanComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TourPlanComponent]
    });
    fixture = TestBed.createComponent(TourPlanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
