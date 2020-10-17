/*
SERVICE : - A service in angular is a class with a specific purpose.

PURPOSES OF A SERVICE
1)  Data sharing across multiple components
2)  Implement Application Logic : - If we have an app where we are taking the users date of birth, we can write a logic to calculate their age based on their dob, this logic does not need any view and it should be re-usable across multiple components, to be able to re-use this logic across multiple component, we cannot bind it to a specific component, we need to have it inside a service
3)  External Interaction : - A service is responsible for connecting our app to a web server or database

CREATING AND USING A SERVICE IN ANGULAR : - We will create an employee service to share data of employees across multiple components
1)  Define the EmployeeService class => ng g s employee
2)  Register the service in the providers[] of your module
3)  Declare the service as a dependency in the constructor of the component where it will be used
*/

//employee.service.ts
import { Injectable } from '@angular/core';

// ds meta tag tells angular dt ds is not jst a normal class but it can have dependency which can be injected in its constructor
@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  constructor() {}

  // ds method shares employee data to every component dt depends on ds service class and call ds method
  getEmployees() {
    return [
      { id: 1, name: 'Andrea', age: 30 },
      { id: 2, name: 'Thomas', age: 12 },
      { id: 3, name: 'David', age: 23 },
      { id: 4, name: 'Dayo', age: 27 },
    ];
  }
}


// employeeList component

import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-first-list',
  template: `
    <h1>Employee List</h1>
    <ul>
      <li *ngFor="let emp of employees">{{ emp.name }}</li>
    </ul>
  `,
  styleUrls: ['./first-list.component.css'],
})
export class FirstListComponent implements OnInit {
  employees = [];

  // we inject d employeeService into d constructor of ds component
  constructor(private employeeService: EmployeeService) {}

  // inside d ngOnInit lifecycle, we set d value returned from getEmployees() to our empty array
  ngOnInit(): void {
    this.employees = this.employeeService.getEmployees();
  }
}


// employeeDetail component

import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-second-detail',
  template: `
    <h1>Employee Details</h1>
    <ul>
      <li *ngFor="let emp of employee">
        {{ emp.id }} - {{ emp.name }} - {{ emp.age }}
      </li>
    </ul>
  `,
  styleUrls: ['./second-detail.component.css'],
})
export class SecondDetailComponent implements OnInit {
  employee;
  constructor(private employeeService: EmployeeService) {}

  ngOnInit(): void {
    this.employee = this.employeeService.getEmployees();
  }
}
