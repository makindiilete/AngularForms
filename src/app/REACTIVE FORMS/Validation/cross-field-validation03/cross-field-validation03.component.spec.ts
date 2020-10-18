import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrossFieldValidation03Component } from './cross-field-validation03.component';

describe('CrossFieldValidation03Component', () => {
  let component: CrossFieldValidation03Component;
  let fixture: ComponentFixture<CrossFieldValidation03Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrossFieldValidation03Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrossFieldValidation03Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
