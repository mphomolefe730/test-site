import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookThisTourComponent } from './book-this-tour.component';

describe('BookThisTourComponent', () => {
  let component: BookThisTourComponent;
  let fixture: ComponentFixture<BookThisTourComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BookThisTourComponent]
    });
    fixture = TestBed.createComponent(BookThisTourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
