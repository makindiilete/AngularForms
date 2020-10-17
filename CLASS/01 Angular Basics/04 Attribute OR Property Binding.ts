/*
With property binding, we can dynamically bind values to html attributes e.g.
we can bind values to 'src' attribute of an img tag,
we can bind values to 'id' attribute of an img tag
*/

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-property-binding',
  template: `
    <!--    We bind our myId property to the id attribute of our input field-->
    <!-- <input type="text" value="Michaelz" id="myId">-->
    <input type="text" value="Michaelz" [id]="myId" />
    <!--  Doing the same with string interpolation-->
    <input type="text" value="Akindiilete" id="{{ myId }}" />
    <!--    Why do we need property binding when we can use string interpolation? string interpolation can only hold strings, so for values like boolean dt we might want to bind to html attributes, we cannot use interpolation-->
    <!--    REACT-->
    <!--    <button disabled={false}>Disabled</button>-->
    <!-- Angular version   property binding to boolean-->
    <button [disabled]="true">Disabled Bool</button>
    <!--    ANGULAR WITH PROPERTY BINDING WITH VALUE FROM CLASS-->
    <button [disabled]="disabledValue">Disabled</button>
    <!--    Property binding alternate syntax-->
    <button bind-disabled="true">Disabled</button>
  `,
  styleUrls: ['./property-binding.component.css'],
})
export class PropertyBindingComponent implements OnInit {
  myId = 'testId';
  disabledValue = true;
  constructor() {}

  ngOnInit(): void {}
}
