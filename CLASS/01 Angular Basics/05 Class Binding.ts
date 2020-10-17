/*
This is really really useful because it allows you to dynamically add or remove classes from html elements base in user interactions or the state of our application...
With class binding, we can bind classes to html elements..
*/

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-class-binding',
  template: `
    <h1>Welcome Mike</h1>
    <!--  Normal way of binding our text-success class to h2 element-->
    <h2 class="text-success">Omoakin</h2>
    <!--    Doing it with class binding-->
    <h2 [class]="successClass">Omoakin</h2>
    <!--    Class binding with ternary expression-->
    <h2 [class]="hasError ? 'text-danger' : 'text-success'">Error</h2>
    <!-- Set class to text-danger if hasError is truthy   -->
    <h2 [class.text-danger]="hasError">HasError</h2>
    <!--    Using ngClass directive to build as many classes as possible dat are truthy from d class field assigned to the directive-->
    <h2 [ngClass]="messageClasses">NgClass</h2>
  `,
  styles: [
    `
      .text-success {
        color: green;
      }
      .text-danger {
        color: red;
      }
      .text-special {
        font-style: italic;
      }
    `,
  ],
})
export class ClassBindingComponent implements OnInit {
  successClass = 'text-success';
  hasError = false;
  isSpecial = true;
  // ds object will apply to ngClass directive
  messageClasses = {
    'text-success': !this.hasError, // ds is true so it will b applied to 'NgClass' text
    'text-danger': this.hasError, // ds is falsy so it wont
    'text-special': this.isSpecial, // ds is also true so it will also apply : - in total, the text will have both text-success and text-special class
  };
  constructor() {}

  ngOnInit(): void {}
}
