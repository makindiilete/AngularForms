/*
So far we have being binding from the class to the template because when we update our class fields, the template look and feel changes.. Event binding has to do with binding from the template to the class e.g. We have a button in the template and we want to bind the click event of this button to our class, d click is going to happen in the template so its from template to class
*/


import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  template: `
    <h1>Welcome Mike</h1>
    <h3>{{ greeting }}</h3>
    <!--    We bind d click event of ds button to our greetHandler-->
    <button (click)="greetHandler()">Greet</button>
    <!--    Getting details about the event : - send $event parameter to the handler-->
    <button (click)="eventDetailsHandler($event)">Event Details</button>
    Event Type = {{ eventType }}
    <!--    Writing event handlers inside template-->
    <button (click)="greeting = 'Welcome Baba Nla'">
      Event Inside Template
    </button>
  `,
  styleUrls: ['./event-binding.component.css'],
})
export class EventBindingComponent implements OnInit {
  greeting;
  eventType;
  constructor() {}

  ngOnInit(): void {}

  // we update the state so we assign a value to our greeting field and then it can be rendered in the UI
  greetHandler() {
    this.greeting = 'Good Morning';
  }

  eventDetailsHandler(event) {
    this.eventType = event.type;
    console.log('Clicked event = ', event);
  }
}
