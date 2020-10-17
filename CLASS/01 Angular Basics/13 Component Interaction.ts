/*
Components can interact with each other in angular... A parent component can send data to its child to use to render itself while a child component can raise an event to trigger an handler inside the parent compnent.. Ds is just the same way react components interact, a parent component in react pass props to its child component, and the child component raise an event e.g. A click event in the child component can call a click handler present inside the parent component...

Angular VS React Component interaction : -
Parent To Child : -
React ==> Parent pass data to child via props
Angular ==> Parent pass data to child via @Input() method

Child To Parent : -
React ==> Child raise a (click) event to trigger a handler inside the parent by calling the props of the handler in the event function
Angular ==> Child raise event to his parent via @Output() method

Examples

Parent To Child => We will send a name from app component to component interaction component and the interaction component will render a text to greet the name

Child To Parent => We will send "Hey Parent" from the child component to the parent component
*/

/*
PARENT TO CHILD

1)  Create the property we want to send to child

import { Component } from '@angular/core';

// D component decorator metadata
@Component({
  selector: 'app-root', // a custom html tag dt can b use to represent ds component e.g. <app-root/> angular will render ds component whenever ds tag is used. ds selector is used in the index.html to render the app component
  templateUrl: './app.component.html', // ds point to d html file dt represents d view for ds component
  styleUrls: ['./app.component.css'], // array of css files dt is specific to ds component alone
})

// AppComponent class
export class AppComponent {
  // We are sending ds field as a prop to our child component
  name = 'Michaelz';
}



2)  Bind d field to d child selector via property in the template binding passing d prop name we want the child to use

<div>
  <!--  just as we pass prop inside d component tag, we bind d 'name' field to the child component tag using 'nameProp' as d prop name which d child will call to access d value of d property-->
  <app-component-interaction [nameProp]="name"></app-component-interaction>
</div>

3)  Inside the child component, access the prop via @Input() and access it in the view

import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-component-interaction',
  template: ` <h2>{{ 'Hello ' + nameProp }}</h2> `,
  styleUrls: ['./component-interaction.component.css'],
})
export class ComponentInteractionComponent {
  // Using d @Input we access d prop passed to ds component so we can bind its value to d view.. ds field name must b d name of d prop we are expecting
  @Input() nameProp;
}

*/


/*
INSTEAD OF USING THE SAME PROP NAME THE PARENT IS SENDING AS THE FIELD NAME OF THE CHILD COMPONENT, WE CAN USE A CUSTOM NAME INSIDE THE CHILD COMPONENT AND BIND THAT TO OUR TEMPLATE

import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-component-interaction',
  template: ` <h2>{{ 'Hello ' + customName }}</h2> `,
  styleUrls: ['./component-interaction.component.css'],
})
export class ComponentInteractionComponent {
// here we are using our customName as ds field name and then inside the @Input() method, we define the name of d prop we are expecting
  @Input('nameProp') customName;
}

*/


/*
CHILD TO PARENT

Sending data from parent to child is relatively easy because inside the parent we have the child selector tag which we can easily pass value to but that is not the case for sending data from child to parent because we do not have the parent selector inside the child template.. We can only send data from child to parent using event

1)  In the child component class, create a property u want to send to parent and assign its value to an instance of the EventEmitter class
2)  Create a click event that will be use to fire the event to parent and this sud call a method dt emit an event using the EventEmitter class which is our class property name
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-component-interaction',
  template: `
    <button (click)="sendEventToParent()">Send Prop To Parent</button>
  `,
  styleUrls: ['./component-interaction.component.css'],
})
export class ComponentInteractionComponent {

// We are sending out an event to parent with the name 'propFromChild', ds property is an instance of EventEmitter class dt gv us the functionality to send/emit events
  @Output() propFromChild = new EventEmitter();

//on click of d button in d template, we emit an event using our field name and calling the emit method of EventEmitter class, we can pass any type of value here
  sendEventToParent() {
    this.propFromChild.emit('Data Sent To Parent From Child');
  }
}


3)  Create a new field inside the parent class which sud the d same name as the event u r expecting from child

import { Component } from '@angular/core';

// D component decorator metadata
@Component({
  selector: 'app-root', // a custom html tag dt can b use to represent ds component e.g. <app-root/> angular will render ds component whenever ds tag is used. ds selector is used in the index.html to render the app component
  templateUrl: './app.component.html', // ds point to d html file dt represents d view for ds component
  styleUrls: ['./app.component.css'], // array of css files dt is specific to ds component alone
})

// AppComponent class
export class AppComponent {
  propFromChild: string;
}

4)  Display the emitted event/ data sent from the child in the parent UI

<div>
//display d data passed from child
  <h1>{{ propFromChild }}</h1>

 //receives d event from child component (propFromChild) and assign its value to d created field in parent class
  <app-component-interaction
    (propFromChild)="propFromChild = $event"
  ></app-component-interaction>
</div>


*/
