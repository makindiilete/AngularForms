/*
We will be learning how we can access html elements that is in the dom directly from our class..

When do we use the viewChildDecorator mostly : - You can use it to get a particular input element from the dom out of all the html elements and input fields available in the dom and then you can perform various with it like setting the focus to the input field on page load..

1)  Assign a variable name to the specific element you want to access from the class, use any string preceed by the # sign i.e.
    <input #nameRef type="text" [(ngModel)]="name" />

2)  Inside the class, create a property that will hold the reference to the input element we have added a variable name to which will be of type 'ElementRef'....

//View

<!--INTERPOLATION-->
<!--Here we bind the value of the 'pageTitle' property in the class so here we can render whatever the value of that property is-->
<h1>{{ pageTitle }}</h1>
<!--PROPERTY/ATTRIBUTE BINDING-->
<!--We bind the src attribute to d 'imgSrc' property of the class so img tag we use whatever the value of the 'imgSrc' is to render its image-->
<img [src]="imgSrc" alt="image" />
<!--EVENT BINDING-->
<div>
  <!--  We execute the incrementCount() on every click of this button-->
  <button (click)="incrementCount()">Button click {{ count }} times</button>
</div>
<!--TWO WAY BINDING-->
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
<!--SPLIT TWO WAY BINDING-->
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

<!--GETTER AND SETTER-->
<div>
  <label>
    <!--    we bind the getter and setter (customerName) to our ngModel-->
    <input type="text" [(ngModel)]="customerName" />
  </label>
  <p>Welcome {{ customerName }}</p>
</div>
<!--VIEW CHILD DECORATOR-->
<div>
  <label>
    <!--We give ds html element a variable that the class can make use of to perform different manipulations with this element-->
    <input #nameRef type="text" [(ngModel)]="name" />
  </label>
  <!--  And also in realtime, d class is updated and we can read the updated value of the name back in the template-->
  <p>Welcome {{ name }}</p>
</div>

*/



//CLASS

import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements AfterViewInit {
  // we will use this for viewChildDecorator.. with d 'ViewChild' decorator, we pass the name of the variable we have in the view which we want this field to target
  @ViewChild('nameRef') nameElementRef: ElementRef;

  // its inside this lifecycle that all template variables becomes available when the component is rendered
  ngAfterViewInit(): void {
    // we call the nativeElement to access the focus() method dt set the focus to the input field we are referencing when the component is fully loaded..
    this.nameElementRef.nativeElement.focus();
    //ds gives us access to all properties and methods present inside nativeElement dt we can make use of
    console.log(this.nameElementRef);
  }
}

