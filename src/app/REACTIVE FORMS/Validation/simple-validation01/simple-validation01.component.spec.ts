import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleValidation01Component } from './simple-validation01.component';

describe('SimpleValidation01Component', () => {
  let component: SimpleValidation01Component;
  let fixture: ComponentFixture<SimpleValidation01Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SimpleValidation01Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleValidation01Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
