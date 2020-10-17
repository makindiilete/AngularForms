/*
GETTER : - A getter is a function that is called to return the value of a private property. We might have some kind of property in our class that we do not want the outside world to directly have access to the property or be able to set its value on the fly.. In order to make the outside world have access to read the value of such property, we create a function that returns the value of the privae field, this function is called "a getter"

SETTER : - This is also a function that we can expose to the outside world in other for the outside world to be able to update the value of this import field.. With setter, we can validate the input coming from outside if they match our validation before allowing our property to receive that value so it keep our code safe,,
*/

/*
View

<!--GETTER AND SETTER-->
<div>
  <label>
    <!--    we bind the getter and setter (customerName) to our ngModel-->
    <input type="text" [(ngModel)]="customerName" />
  </label>
  <p>Welcome {{ customerName }}</p>
</div>

*/

//CLASS

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {

  //private field not accessible to the outside world : - ds will b used for getters and setters (split 2 way binding alternative
  private _customerName: string;

  // ds getter customerName private field on the fly as we type
  get customerName(): string {
    return this._customerName;
  }

  // ds is called to set the value of the private property and after every update, it checks if the total string equals to "michaelz" so it can greet the user
  set customerName(value: string) {
    this._customerName = value;
    if (value.toLowerCase() === 'michaelz') {
      window.alert('Hello Michaelz');
    }
  }

}

