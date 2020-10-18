import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdditionalFormControls05Component } from './additional-form-controls05.component';

describe('AdditionalFormControls05Component', () => {
  let component: AdditionalFormControls05Component;
  let fixture: ComponentFixture<AdditionalFormControls05Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdditionalFormControls05Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdditionalFormControls05Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
