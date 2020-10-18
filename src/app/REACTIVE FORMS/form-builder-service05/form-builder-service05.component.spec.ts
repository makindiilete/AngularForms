import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormBuilderService05Component } from './form-builder-service05.component';

describe('FormBuilderService05Component', () => {
  let component: FormBuilderService05Component;
  let fixture: ComponentFixture<FormBuilderService05Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormBuilderService05Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormBuilderService05Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
