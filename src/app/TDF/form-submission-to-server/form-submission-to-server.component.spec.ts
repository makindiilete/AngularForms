import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormSubmissionToServerComponent } from './form-submission-to-server.component';

describe('FormSubmissionToServerComponent', () => {
  let component: FormSubmissionToServerComponent;
  let fixture: ComponentFixture<FormSubmissionToServerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormSubmissionToServerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormSubmissionToServerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
