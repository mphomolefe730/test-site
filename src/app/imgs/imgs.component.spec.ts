import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImgsComponent } from './imgs.component';

describe('ImgsComponent', () => {
  let component: ImgsComponent;
  let fixture: ComponentFixture<ImgsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ImgsComponent]
    });
    fixture = TestBed.createComponent(ImgsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
