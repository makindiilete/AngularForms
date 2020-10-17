/*
Style binding is used to bind inline styles to html elements it is similar to style binding
*/
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-style-binding',
  template: `
    <!--    Binding to the color css property of the h2 element -->
    <h2 [style.color]="'orange'">Orange</h2>
    <!--    style binding ternary operator-->
    <h2 [style.color]="hasError ? 'red' : 'green'">Orange</h2>
    <!--    Binding style to field value-->
    <h2 [style.color]="highlightColor">Orange</h2>
    <!--    ngStyle directive to bind to style objects defined in the class-->
    <h2 [ngStyle]="titleStyles">ngStyle directive</h2>
  `,
  styles: [],
})
export class StyleBindingComponent implements OnInit {
  hasError = true;
  highlightColor = 'Orange';
  titleStyles = {
    color: 'blue',
    fontStyle: 'italic',
  };
  constructor() {}

  ngOnInit(): void {}
}
