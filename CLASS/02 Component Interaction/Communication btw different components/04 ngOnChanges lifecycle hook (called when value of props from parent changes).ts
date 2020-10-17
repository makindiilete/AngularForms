/*
We want to achieve the same functionality we did in the previous video to perform a logic based on the props passed to the child component now using ngOnChanges lifecycle instead of getter and setter..
ngOnChanges : - This lifecycle hook is called whenever angular detect changes to any props passed to a component.. When a change is detected, we can use the prop name as key to extract the value passed from the parent component and then do something
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


/*
PARENT VIEW

<app-child [loggedInPropWithNgOnChange]="loggedIn"></app-child>

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
export class ChildComponent implements OnChanges {

  /*=======================================================================*/
  @Input() loggedInPropWithNgOnChange: boolean; //ds is d prop dt will b passed from the parent
  message: string; // we will store d message to render in the child template in ds var so we display it on d screen

  //ds hook is called when d value of props passed to ds component via "@Input()" changes
  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
    /*Console log : -
    {
    loggedInPropWithNgOnChange: SimpleChange
    currentValue: true
    firstChange: true
    previousValue: undefined
}
*/
    const loggedInValue = changes['loggedInPropWithNgOnChange']; // from the 'changes' arg of ds lifecycle, we can use d input name as d key to extract the value passed from the parent and run a check if its true or false and then do something.
    if (loggedInValue) {
      this.message = 'Welcome Back Michaelz!';
    } else {
      this.message = 'Please Log In!';
    }
  }
}

/*
CHILD TEMPLATE

//We render the message from d class with string interpolation
{{ message }}

*/
