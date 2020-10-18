import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WholeFormValidationOnSubmitComponent } from './whole-form-validation-on-submit.component';

describe('WholeFormValidationOnSubmitComponent', () => {
  let component: WholeFormValidationOnSubmitComponent;
  let fixture: ComponentFixture<WholeFormValidationOnSubmitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WholeFormValidationOnSubmitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WholeFormValidationOnSubmitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
