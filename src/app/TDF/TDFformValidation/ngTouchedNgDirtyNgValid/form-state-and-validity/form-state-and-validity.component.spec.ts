import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormStateAndValidityComponent } from './form-state-and-validity.component';

describe('FormStateAndValidityComponent', () => {
  let component: FormStateAndValidityComponent;
  let fixture: ComponentFixture<FormStateAndValidityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormStateAndValidityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormStateAndValidityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
