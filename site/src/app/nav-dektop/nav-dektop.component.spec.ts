import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavDektopComponent } from './nav-dektop.component';

describe('NavDektopComponent', () => {
  let component: NavDektopComponent;
  let fixture: ComponentFixture<NavDektopComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NavDektopComponent]
    });
    fixture = TestBed.createComponent(NavDektopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
