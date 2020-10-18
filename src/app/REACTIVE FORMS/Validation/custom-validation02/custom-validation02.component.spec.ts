import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomValidation02Component } from './custom-validation02.component';

describe('CustomValidation02Component', () => {
  let component: CustomValidation02Component;
  let fixture: ComponentFixture<CustomValidation02Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomValidation02Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomValidation02Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
