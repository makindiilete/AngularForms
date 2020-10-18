import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NestedFormGroup03Component } from './nested-form-group03.component';

describe('NestedFormGroup03Component', () => {
  let component: NestedFormGroup03Component;
  let fixture: ComponentFixture<NestedFormGroup03Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NestedFormGroup03Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NestedFormGroup03Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
