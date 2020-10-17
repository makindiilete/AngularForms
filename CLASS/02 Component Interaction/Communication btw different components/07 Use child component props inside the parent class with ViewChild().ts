/*
Now if we want to make use of the props from the child inside the parent class, we will make use of @ViewChild() decorator..
So the task here is to access the property available in the child component from the parent component and then change the value to something else
*/


//PARENT CLASS

import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { ChildComponent } from '../child/child.component';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css'],
})
export class ParentComponent implements AfterViewInit {
  //ds property will be passed as props to the child component
  loggedIn = true;

  //ds property "childProp" will store the value of the props passed from the child
  @ViewChild(ChildComponent) childProp: ChildComponent;

  //Inside ds lifecycle hook we have access to the child props we received using the @ViewChild
  ngAfterViewInit(): void {
    // we get the name field of the child and change it value to something else
    this.childProp.name = 'Ferume';
  }
}



//PARENT VIEW

/*
<!--Pass props from child to parent-->

<app-child #childProps></app-child>
<!--print our the value of 'name' property in the parent component -->
{{ childProps.name }}

<!--Call a method inside d child component on click of a button in the parent template-->
<button (click)="childProps.greetMichaelz()">
  Greet {{ childProps.name }}
</button>

*/


//CHILD CLASS
import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
})
export class ChildComponent {
  name = 'Michaelz';

  greetMichaelz() {
    alert('Hey Michaelz');
  }
}

