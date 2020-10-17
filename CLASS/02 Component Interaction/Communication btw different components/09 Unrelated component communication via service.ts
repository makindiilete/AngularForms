/*
In angular service, we can make unrelated component or nested component communicate effectively using a service.. A service uses a concept called 'subject' to take notification from a single source and notify every other component that are subscribed to that service store..

The component that want to send the message we send it to the subject of a service and the subject we then take it and notify all the components dt are subscribed to the service.

STEPS : -

1)  create a subject and expose the subject as Observable in a service.. => Create a private property in a service created and the property name sud end with "Source" as a convention to signal dt d property is d source where msgs are stored and dispatched
1b)  Set up an observable (observable is a string ending with $ sign) and assign its value to the private property
1c) Create a method in the service that accepts msg from the teacher component and then dispatch that message out
2)  Go to the component where you want to send the message to the service and create an event dt calls a method in the class, the method will then call d method defined in the service passing an arg to d method, ds will b d msg to be send to an unrelated or deeply nested component
3)  Subscribe to the observable from d service in the student component (component dt want to make use of notifications from the service) inside the ngOnInit lifecycle hook

*/

//Service
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UnrelatedComponentService {
  private _teacherMessageSource = new Subject<string>(); // ds subject will receive and dispatch strings
  teacherMessages$ = this._teacherMessageSource.asObservable(); // we expose _teacherMessageSource private property as an observable
  constructor() {}

  // ds method receive a msg string and dispatch it out
  sendMessage(msg: string) {
    this._teacherMessageSource.next(msg);
  }
}



//Teacher class
import { Component, OnInit } from '@angular/core';
import { UnrelatedComponentService } from '../unrelated-component.service';

@Component({
  selector: 'app-parent-service',
  templateUrl: './parent-service.component.html',
  styleUrls: ['./parent-service.component.css'],
})
export class ParentServiceComponent implements OnInit {
  constructor(private _unrelatedService: UnrelatedComponentService) {}

  ngOnInit(): void {}

  appreciateStudent() {
    this._unrelatedService.sendMessage('Good Job!');
  }

  greetStudent() {
    this._unrelatedService.sendMessage('Good Morning!');
  }
}


//Teacher View
/*<h1>Teacher</h1>

<button (click)="greetStudent()">Greet Student</button>
<button (click)="appreciateStudent()">Appreciate Student</button>
<app-child-service></app-child-service>
*/


//Student class
import { Component, OnInit } from '@angular/core';
import { UnrelatedComponentService } from '../unrelated-component.service';

@Component({
  selector: 'app-child-service',
  templateUrl: './child-service.component.html',
  styleUrls: ['./child-service.component.css'],
})
export class ChildServiceComponent implements OnInit {
  //we inject our service
  constructor(private _unrelatedService: UnrelatedComponentService) {}

  //we subscribe to d observable in d service (teacherMessages$) and we extract the message sent
  ngOnInit(): void {
    this._unrelatedService.teacherMessages$.subscribe((message) => {
      if (message.toLowerCase() === 'good morning!') {
        alert('Good Morning Teacher!');
      } else {
        alert('Thank You Teacher!');
      }
    });
  }
}
