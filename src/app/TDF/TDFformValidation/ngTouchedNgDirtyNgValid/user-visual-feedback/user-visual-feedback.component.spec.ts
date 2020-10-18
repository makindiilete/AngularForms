import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserVisualFeedbackComponent } from './user-visual-feedback.component';

describe('UserVisualFeedbackComponent', () => {
  let component: UserVisualFeedbackComponent;
  let fixture: ComponentFixture<UserVisualFeedbackComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserVisualFeedbackComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserVisualFeedbackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
