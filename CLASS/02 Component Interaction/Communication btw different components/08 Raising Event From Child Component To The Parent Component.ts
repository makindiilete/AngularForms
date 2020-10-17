/*
When developing apps, we can see scenarios where a child component will want to make use of a method that is present inside the parent component... we can acheive this using the @Output() decorator... This will be useful especially when we have a parent with many children and all children want to make use of the same method... it does not make sense to paste the same logic inside all the children components, instead its preferrable to move the logic to the parent component and any child that needs it can call this method..
*/

//CHILD CLASS
import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child-2',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
})
export class ChildComponent2 {
  name = 'Debo'; // d name of the user we want the parent to greet
  @Output() greetEvent = new EventEmitter(); //inside d selector of ds child class in the parent template, we will pass ds field name as props and assign a method to it in the parent class

  //when ds method is called, we want to execute the greet() of d parent class
  callParentGreetMethod() {
    this.greetEvent.emit(this.name);
  }
}


//CHILD VIEW
/*<h2>child works!</h2>
<!--ds button on click should call the greet() of his parent class-->
<button (click)="callParentGreetMethod()">Greet</button>
*/


//PARENT CLASS
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent-2',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css'],
})
export class ParentComponent2 {
  // from d child component, ds method will be triggered and send us a name to greet
  greetUser($event: string) {
    alert(`Hello ${$event}`);
  }
}


//PARENT VIEW
/*<h1>parent works!</h1>

<!--we bind our greetUser() method of d child class to our parent method handler-->
<app-child-2 (greetEvent)="greetUser($event)"></app-child-2>
*/
