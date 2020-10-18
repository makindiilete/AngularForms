import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayErrorMsgsComponent } from './display-error-msgs.component';

describe('DisplayErrorMsgsComponent', () => {
  let component: DisplayErrorMsgsComponent;
  let fixture: ComponentFixture<DisplayErrorMsgsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisplayErrorMsgsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayErrorMsgsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
