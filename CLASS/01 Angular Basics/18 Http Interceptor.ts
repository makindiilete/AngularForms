/*
We have learnt how we can catch http error in our http service but instead of catching error on each request, we can implement a global error handler via http interceptor.. We will learn how to do this in this video
*/


//error-intercept.service.ts
import { Injectable } from '@angular/core';
import {
  HttpErrorResponse,
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ErrorInterceptService implements HttpInterceptor {
  constructor() {}

  // d intercept method takes 2 params, d http req and next to call d next handler in d chain
  intercept(
    // request to handle
    req: HttpRequest<any>,
    // call d next httpHandler in d chain
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    // handle the req
    return next.handle(req).pipe(
      // retry d req again once
      retry(1),
      // catch any http err
      catchError((err: HttpErrorResponse) => {
        let errorMessage = '';
        if (err.error instanceof ErrorEvent) {
          //  client side error
          errorMessage = `Error: ${err.error.message}`;
        } else {
          //  server-side error
          errorMessage = `Error Status: ${err.status}\nMessage: ${err.message}`;
        }
        // log d error
        console.log('Error Intercepted : -', errorMessage);
        // then throw it so d component can make use of it
        return throwError(errorMessage);
      })
    );
  }
}


//app,module,ts

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { InterpolationComponent } from './Data Binding/interpolation/interpolation.component';
import { PropertyBindingComponent } from './Data Binding/property-binding/property-binding.component';
import { FormsModule } from '@angular/forms';
import { ClassBindingComponent } from './Data Binding/class-binding/class-binding.component';
import { StyleBindingComponent } from './Data Binding/style-binding/style-binding.component';
import { EventBindingComponent } from './Data Binding/event-binding/event-binding.component';
import { TemplateRefVariableComponent } from './template-ref-variable/template-ref-variable.component';
import { TwoWayBindingComponent } from './Data Binding/two-way-binding/two-way-binding.component';
import { NgIfStructuralDirectiveComponent } from './Structural Directives/ng-if-structural-directive/ng-if-structural-directive.component';
import { NgForStructuralDirectiveComponent } from './Structural Directives/ng-for-structural-directive/ng-for-structural-directive.component';
import { NgSwitchSturcturalDirectiveComponent } from './Structural Directives/ng-switch-sturctural-directive/ng-switch-sturctural-directive.component';
import { ComponentInteractionComponent } from './Component interaction/childComponent/component-interaction.component';
import { ParentComponentComponent } from './Component interaction/parent-component/parent-component.component';
import { PipesComponent } from './pipes/pipes.component';
import { FirstListComponent } from './Services/first-list/first-list.component';
import { SecondDetailComponent } from './Services/second-detail/second-detail.component';
import { EmployeeService } from './Services/employee.service';
import { HttpService } from './Services/Http & Observable/http.service';
import {
  HTTP_INTERCEPTORS,
  HttpClient,
  HttpClientModule,
} from '@angular/common/http';
import { ErrorInterceptService } from './Services/Http & Observable/error-intercept.service';

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    InterpolationComponent,
    PropertyBindingComponent,
    ClassBindingComponent,
    StyleBindingComponent,
    EventBindingComponent,
    TemplateRefVariableComponent,
    TwoWayBindingComponent,
    NgIfStructuralDirectiveComponent,
    NgForStructuralDirectiveComponent,
    NgSwitchSturcturalDirectiveComponent,
    ComponentInteractionComponent,
    ParentComponentComponent,
    PipesComponent,
    FirstListComponent,
    SecondDetailComponent,
  ],
  imports: [BrowserModule, FormsModule, HttpClientModule],
  providers: [
    EmployeeService,
    HttpService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ErrorInterceptService,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}


//component
import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { HttpService } from '../Http & Observable/http.service';
import { IEmployee } from '../Http & Observable/employee';
import { IPost } from '../Http & Observable/post';

@Component({
  selector: 'app-second-detail',
  template: `
    <h1>Employee Details</h1>
    <ul>
      <li *ngFor="let emp of employee">
        {{ emp.id }} - {{ emp.name }} - {{ emp.age }}
      </li>
    </ul>
    <h1>User details</h1>
    <ul>
      <li *ngFor="let user of users">
        {{ user.id }} - {{ user.name }} - {{ user.email }}
      </li>
    </ul>
    <button (click)="addPost()">Add Post</button>
    <button (click)="updatePost()">Edit Post</button>
    <button (click)="deletePost()">Delete Post</button>
    <!--    we display error msg if available-->
    <p [style.color]="'red'">{{ errorMsg }}</p>
  `,
  styleUrls: ['./second-detail.component.css'],
})
export class SecondDetailComponent implements OnInit {
  employee;
  users: IEmployee[];
  singleUser: IEmployee[];
  post: IPost = {
    title: 'Forex Trading',
    body: 'How To Trade The Market',
    id: 11,
  };
  postEdit: IPost = {
    title: 'Forex Trading',
    body: 'How To Trade The Market Part 2',
    id: 11,
  };
  errorMsg: string;
  constructor(
    private employeeService: EmployeeService,
    private httpService: HttpService
  ) {}

  ngOnInit(): void {
    this.employee = this.employeeService.getEmployees();
    this.fetchPosts();
    this.fetchUsers();
  }

  // GET
  fetchUsers() {
    this.httpService.getUser(5).subscribe(
      (data) => {
        this.singleUser = data;
        console.log('User = ', data);
      }, // if there is an error, we handle it
      (error) => (this.errorMsg = error)
    );
  }

  // GET
  fetchPosts() {
    this.httpService.getUsers().subscribe(
      (data) => {
        console.log('Emp data = ', data);
        this.users = data;
      },
      // if there is an error, we handle it
      (error) => (this.errorMsg = error)
    );
  }

  // POST
  addPost() {
    this.httpService.createPost(this.post).subscribe(
      (data) => console.log(data), // if there is an error, we handle it
      (error) => (this.errorMsg = error)
    );
  }

  // PUT
  updatePost() {
    this.httpService.editPost(this.postEdit).subscribe(
      (data) => console.log(data),
      // if there is an error, we handle it
      (error) => (this.errorMsg = error)
    );
  }

  // DELETE
  deletePost() {
    this.httpService.deletePost().subscribe(
      (data) => console.log(data),
      // if there is an error, we handle it
      (error) => (this.errorMsg = error)
    );
  }
}
