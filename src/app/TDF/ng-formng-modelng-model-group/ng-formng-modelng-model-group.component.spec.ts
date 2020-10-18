import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgFormngModelngModelGroupComponent } from './ng-formng-modelng-model-group.component';

describe('NgFormngModelngModelGroupComponent', () => {
  let component: NgFormngModelngModelGroupComponent;
  let fixture: ComponentFixture<NgFormngModelngModelGroupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgFormngModelngModelGroupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgFormngModelngModelGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
