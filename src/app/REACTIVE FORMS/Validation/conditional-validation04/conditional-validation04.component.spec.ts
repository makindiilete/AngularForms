import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConditionalValidation04Component } from './conditional-validation04.component';

describe('ConditionalValidation04Component', () => {
  let component: ConditionalValidation04Component;
  let fixture: ComponentFixture<ConditionalValidation04Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConditionalValidation04Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConditionalValidation04Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
