import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubmitFormToServerComponent } from './submit-form-to-server.component';

describe('SubmitFormToServerComponent', () => {
  let component: SubmitFormToServerComponent;
  let fixture: ComponentFixture<SubmitFormToServerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubmitFormToServerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubmitFormToServerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
