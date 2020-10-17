/*
We will start by learning how angular class and template communicate through binding.. Angular provides 4 forms of binding and each form provides binding to the DOM, from the DOM or in both direction.
1) Interpolation {{}} : - One way data binding => Binding from the class (properties & methods of d class) to the html template (controls)
2)  Property Binding [] : - One way data binding => Binds a property in the class to an attribute of html tag
3)  Event Binding () : - One way data binding => Binds html events (click, hover etc) from the template to the class. We can execute methods handlers of a class base on the user interactions e.g. click events
4)  Two way binding (Banana in a box) : - [(ngModel)] : - "My definition :- Binding to the attributes of html template via user interactions".  Two way binding ensures that the model and the view are always in sync i.e. In react, when we have input field, we can update a property value in the state base on the user input in the form via "onChange{handleInput}", two way binding does this for us in angular. As user types, the property it is connected to in the class is updated with every keystrokes.
*/

//Interpolation

//class
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  pageTitle = 'Angular Component Interaction';
}

//View
/*<!--Here we bind the value of the 'pageTitle' property in the class so here we can render whatever the value of that property is-->
<h1>{{ pageTitle }}</h1>

//React hooks
<h1>{pageTitle}</h1>
//React class
<h1>{this.state.pageTitle}</h1>
*/

//Property Binding

//Class
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  //PropertyBinding => We bind the value of ds property to the 'src' attribute of the htm <img/> tag
  imgSrc = 'https://picsum.photos/200';
}

//View
/*
<img [src]="imgSrc" alt="image" />

//React hooks
<img src={imgSrc} alt="image" />
//React class component
<img src={this.state.imgSrc} alt="image" />
*/


/*Event binding (template -> class) => A click event binds to 'count' property of the class and then a method is exposed to increment the value on every click event */

//class

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  count = 0;

  // a method to increment the count property on every click, it is void bcos it returns no value, it only set a modify the value of a property
  incrementCount(): void {
    this.count++;
  }
}


/*View

<div>
  <!--  We execute the incrementCount() on every click of this button-->
  <button (click)="incrementCount()">Button click {{ count }} times</button>
</div>

*/

/*Two way binding [(ngModel)] : - To use two way bindng, you need to first include the forms module... This is very essential when working with forms to submit the value stored in forms field to to prefill the form input with data fetched from the backend

//View

<div>
  <label>
    <!--    1) template pass d enter value from the template to the class.
2)  The class then use the value to update itself and then pass the update value back to the template so it can be used anywhere in the dom-->
    <!--    with [(ngModel)], we copy every key stroke we type in this input field to the 'name' property in the class-->
    <input type="text" [(ngModel)]="name" />
  </label>
  <!--  And also in realtime, d class is updated and we can read the updated value of the name back in the template-->
  <p>Welcome {{ name }}</p>
</div>

*/

//class
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  //Two way binding => ds field by default does not have a value, its value will be set by users keystrokes in the template input field, so the template and class will be in sync to update each other on every keystrokes
  name: string;
}

