import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddFormHtmlComponent } from './add-form-html.component';

describe('AddFormHtmlComponent', () => {
  let component: AddFormHtmlComponent;
  let fixture: ComponentFixture<AddFormHtmlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AddFormHtmlComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddFormHtmlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
