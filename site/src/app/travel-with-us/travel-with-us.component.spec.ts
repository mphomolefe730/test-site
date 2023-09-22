import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TravelWithUsComponent } from './travel-with-us.component';

describe('TravelWithUsComponent', () => {
  let component: TravelWithUsComponent;
  let fixture: ComponentFixture<TravelWithUsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TravelWithUsComponent]
    });
    fixture = TestBed.createComponent(TravelWithUsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
