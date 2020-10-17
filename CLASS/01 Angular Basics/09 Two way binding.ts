/*
Two way binding allows us to update our state in realtime with the value entered in input fields of an html element.. This is mostly useful when working with forms

NOTE : - This depends on the FormModule which must be added to the imports[] of your appModule
*/
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-two-way-binding',
  template: `
    <!--    We are binding the keyEvent of ds element to d 'inputState' field of our state i.e. updating d state in realtime with the value entered in ds input element-->
    <input type="text" [(ngModel)]="inputState" />
    <!--we display in realtime d updated state-->
    {{ inputState }}
  `,
  styleUrls: ['./two-way-binding.component.css'],
})
export class TwoWayBindingComponent implements OnInit {
  inputState: string;
  constructor() {}

  ngOnInit(): void {}
}
