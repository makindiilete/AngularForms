import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BindFormDataToModelComponent } from './bind-form-data-to-model.component';

describe('BindFormDataToModelComponent', () => {
  let component: BindFormDataToModelComponent;
  let fixture: ComponentFixture<BindFormDataToModelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BindFormDataToModelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BindFormDataToModelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
