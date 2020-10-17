/*
Sometimes when the template and class interacts, we might want to execute some additional line of code e.g. We might want to call a method in the class to do something.. The normal two way binding those give us the opportunity to do something during the interaction btw the template and class, we will have to split the two way binding from [()] to (propertyBinding & eventBinding) [] () to achieve this..

So we want to have an input field that is connected to two way binding and so the class always return the updated value to the template, but once the userName typed in the input field equals to "Michaelz", we want to pause and run a method to greet the user....
*/

/*
Acheiving two way binding with splitted two way binding

<div>
  <label>
    <!--  1)  $event => the updated value of the input tag.. We assign it back to the userName property of the class to achieve two way binding
    2) (ngModelChange) => listens to how the userName change and keep assigning the latest value to the respective property
    -->
    <input
      [ngModel]="userName"
      (ngModelChange)="userName = $event"
      type="text"
    />
  </label>
  <p>Welcome {{ userName }}</p>
</div>

*/

/*
SPLIT TWO WAY BINDING TO CHECK IF THE VALUE IN THE INPUT FIELD IS EQUAL TO "michaelz" and then render an alert to GREET THE USER


//View

<div>
  <label>
    <!-- with every keyStroke, we call d greetUser method passing $event as the update string, so the method can keep checking this strings as they are forming to perform a specific operation depending on the updated value
    -->
    <input
      [ngModel]="userName"
      (ngModelChange)="greetUser($event)"
      type="text"
    />
  </label>
  <p>Welcome {{ userName }}</p>
</div>

*/

//Class

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  //ds will be used for split two way binding
  userName: string;

  // ds method accept a string argument from the template ($event)
  greetUser($event: string) {
    //convert the string received from view to lowercase and check if its equal to "michaelz"
    if ($event.toLowerCase() === 'michaelz') {
      window.alert('Welcome Michaelz');
    }
  }
}

/*
NOTE : - An alternative approach to split two way binding is using getters and setters.. This should be preffered so we do not bother splitting two way binding...
*/
