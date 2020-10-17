/*
We will see how a parent can pass props to its child component in angular via @InputDecorator
*/

//Parent class
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css'],
})
export class ParentComponent {
  //ds property will be passed as props to the child component
  loggedIn = true;
}


//Parent view
/*<h2>Parent Component</h2>
<!--inside the child selector/tag, we pass the loggedIn prop to d child component-->
<app-child [loggedIn]="loggedIn"></app-child>

<!--[childExpectedValue] : - ds is the name d child component expect => d string inside @Input("string") or if d child component pass no arg, d name here will b the child component property name
="loggedIn" : - This is the name of the property inside the parent component where child component wanna take its value from
-->
<!--<app-child [childExpectedValue]="loggedIn"></app-child>-->
*/


//child class

import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
})
export class ChildComponent {
  //use ds format if u want to use a different property name different from d parent property name inside ds child component => "childLoggedIn" will b used in ur child template while "childExpectedValue" will be used inside the parent view to pass d props with the name we have as arg inside the @Input decorator here

  // @Input('childExpectedValue') childLoggedIn: boolean;

  // we bind Input() decorator to ds to state that the value for ds field will be passed as props from parent component
  @Input() loggedIn: boolean;
}


//child view
/*<h3>Child Component</h3>
<!--we want to display ds if the user is logged in i.e. a loggedIn property is set to true-->
<p *ngIf="loggedIn">Welcome back!</p>
if dt loggedIn property is false, we want to render this tag
<p *ngIf="!loggedIn">Please log in</p>

<!--using different name inside the child component-->
<!--<p *ngIf="childLoggedIn">Welcome back!</p>-->
<!--<p *ngIf="!childLoggedIn">Please log in!</p>-->
*/
