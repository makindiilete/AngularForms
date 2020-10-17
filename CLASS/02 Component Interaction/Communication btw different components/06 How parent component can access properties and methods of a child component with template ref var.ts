/*
NOTE : - The property accessed using this method is only available to the parent view and not the class... To make use of the child props inside the parent class, we need to use "@ViewChild()" decorator
We have seen how a parent component can pass down its properties and methods as props to the child component via @Input() decorator, what if we have some properties and methods defined inside the child component and we want the parent to access them? The child template does not contain the parent selector so there is no way the child can pass the props to his parent...

Since the parent compoent contains the child selector, we can add a template ref var to the selector and from that variable, we can access all the properties and methods available in the child class
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


//PARENT TEMPLATE
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
