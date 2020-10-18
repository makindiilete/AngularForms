import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactiveFormModelComponent } from './reactive-form-model.component';

describe('ReactiveFormModelComponent', () => {
  let component: ReactiveFormModelComponent;
  let fixture: ComponentFixture<ReactiveFormModelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ReactiveFormModelComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReactiveFormModelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
