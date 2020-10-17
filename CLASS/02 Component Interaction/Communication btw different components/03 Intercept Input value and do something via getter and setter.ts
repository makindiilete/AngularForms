/*
We will see how the child component can intercept the prop passed from the parent component to perform any logic e.g. Check if the 'loggedIn' value passed from the parent is true and if so, greet the user, else tell the user to login
*/

/*
PARENT VIEW
<h2>Parent Component</h2>
<!--@Input decorator with getter & setter-->
<!--onClick of login button, we set d property value in the class to true-->
<button (click)="loggedIn = true">Login</button>
<!--onClick of logout button, we set d property value in the class to false-->
<button (click)="loggedIn = false">Log Out</button>
{{ loggedIn }}
//We pass the 'loggedIn' prop to the child component so the child component can make use of it using its 'loggedIn2' field but ds 'loggedIn2' here is a setter dt check received value of the prop and store it into its private property field or perform a logic with it
<app-child [loggedIn2]="loggedIn"></app-child>

*/

//PARENT CLASS
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


/*
CHILD VIEW
<h3>Child Component</h3>

<!--@Input decorator (props from parent) Using Getter And Setter-->
{{ message }}

*/

//CHILD CLASS
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
})
export class ChildComponent {
  // ds field will change base on the boolean value
  message: string;

  //a getter method d outside calls to retrieve the value of the private field
  get loggedIn2(): boolean {
    return this._loggedIn2;
  }

  //a setter method dt will receive props from parent and then store the prop received into the private property
  @Input() set loggedIn2(value: boolean) {
    this._loggedIn2 = value;
    //we check if d prop passed to ds component is true,
    if (value) {
      //we welcome the user
      this.message = 'Welcome Back Michael';
    } else {
      // else we tell user to log in
      this.message = 'Please Log In';
    }
  }
}


/*MY SOLUTION : - We can always do this without a getter and setter

//CHILD VIEW

<h3>Child Component</h3>
<!--@Input Decorator (Props from Parent)-->
<!--we want to display ds if the user is logged in i.e. a loggedIn property is set to true-->
<p *ngIf="loggedIn">Welcome back!</p>
<!--if dt loggedIn property is false, we want to render this tag-->
<p *ngIf="!loggedIn">Please log in</p>


*/


//CHILD CLASS

import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
})
export class ChildComponent {
  // we bind Input() decorator to ds to state so that the value for ds field will be passed as props from parent component and because the value depends and connected to the field inside the parent class, we can execute our logic with *ngIf on the fly
  @Input() loggedIn: boolean;

}



/*PARENT VIEW
<h2>Parent Component</h2>
<!--onClick of login button, we set d property value in the class to true-->
<button (click)="loggedIn = true">Login</button>
<!--onClick of login button, we set d property value in the class to false-->
<button (click)="loggedIn = false">Log Out</button>
{{ loggedIn }}
<!--We pass the 'loggedIn' prop to the child component so the child component can make use of it using its 'loggedIn2' field but ds 'loggedIn2' here is a setter dt check received value of the prop and store it into its private property field or perform a logic with it-->
<app-child [loggedIn]="loggedIn"></app-child>

*/


//PARENT CLASS
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

