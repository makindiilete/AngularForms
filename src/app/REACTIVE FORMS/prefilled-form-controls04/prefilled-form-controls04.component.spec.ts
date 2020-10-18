import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrefilledFormControls04Component } from './prefilled-form-controls04.component';

describe('PrefilledFormControls04Component', () => {
  let component: PrefilledFormControls04Component;
  let fixture: ComponentFixture<PrefilledFormControls04Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrefilledFormControls04Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrefilledFormControls04Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
