/*
BINDING DATA FROM CLASS TO TEMPLATE
With interpolation, we can use dynamic values inside our html i.e. Instead of using hard coded values, we can use values we received from web server for example inside the html using interpolation or also write an expression and render its evaluated value

*/

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-interpolation',
  template: `
    <!--    THINGS YOU CAN DO-->
    <!--    Interpolation-->
    <h2>Welcome {{ name }}</h2>
    <!--  Expressions -->
    <h2>{{ 2 + 2 }}</h2>
    <!--  String concatenation-->
    <h2>{{ 'Welcome ' + name }}</h2>
    <!--  Javascript methods and properties-->
    <h2>{{ name.length }}</h2>
    <h2>{{ name.toUpperCase() }}</h2>
    <!--    Calling methods defined in a class-->
    <h2>{{ greetUser() }}</h2>
    <h2>{{ siteUrl }}</h2>
    <!--    THINGS YOU CANNOT DO-->
    <!--    Assignments-->
    <!--    <h2>{{a = 2 + 2}}</h2>-->
    <!--    Access to global variables-->
    <!--    <h2>{{window.location.href}}</h2>-->
  `,
  styleUrls: ['./interpolation.component.css'],
})
export class InterpolationComponent implements OnInit {
  public name = 'Michaelz';
  public siteUrl = window.location.href;
  constructor() {}

  ngOnInit(): void {}

  greetUser() {
    return 'Hello ' + this.name;
  }
}
