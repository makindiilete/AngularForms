/*
Routing and navigation is done in angular using the angular router

In this video, we will learn how to navigate between two views with button clicks

ROUTING IN STEPS
1)  Generate a project with routing option
2)  Generate the components that will use the routing
3)  Configure the routes
4)  Add buttons/links and use directive to navigate

STEP 1 : - GENERATE A NEW PROJECT WITH ROUTING
 ng new projectName --routing

ADDING ROUTING TO EXISTING ANGULAR APP
1)  Ensure you have   <base href="/"> below d title tag of your index.html
2)  Add 'app-routing.module.ts' to the app folder of your project with the following config : -

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


3)  Import 'AppRoutingModule' in the imports[] of app.module.ts

STEP 2 : - GENERATE THE PROJECT THAT WILL USE THE ROUTING
1)  ng g c EmployeeList -it -is
2)  ng g c DepartmentList -it -is

STEP 3 : - CONFIGURE THE ROUTES
1)  You configure ur routes inside the routes array "const routes: Routes = [];" each route is an object containing the path to be entered in the url and the component to navigate to when the path is matched

//app-routing.module.ts
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DepartmentListComponent} from "./department-list/department-list.component";
import {EmployeeListComponent} from "./employee-list/employee-list.component";


const routes: Routes = [
  {path : "departments", component: DepartmentListComponent},
  {path : "employees", component: EmployeeListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


WE NOW HAVE BOTH COMPONENTS IMPORTED IN THE APP MODULE AND ALSO THE APP ROUTING MODULE : - From the app-routing module, export an array of the components using the route in and import the array in app module

# In the app component template, use the router-outlet tag

<div style="text-align: center">
  <h1>Routing And Navigation</h1>
</div>
<router-outlet></router-outlet>

*/


//app-routing.module.ts
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DepartmentListComponent} from "./department-list/department-list.component";
import {EmployeeListComponent} from "./employee-list/employee-list.component";


const routes: Routes = [
  {path : "departments", component: DepartmentListComponent},
  {path : "employees", component: EmployeeListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [
  DepartmentListComponent, EmployeeListComponent
]


//app.module.ts
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent, routingComponents],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}


//app.component.html
<div style="text-align: center">
  <h1>Routing And Navigation</h1>
</div>
<nav>
<a routerLink="/departments" routerLinkActive="active">Departments</a>
  <a routerLink="/employees" routerLinkActive="active">Employees</a>
  </nav>
  <router-outlet></router-outlet>


//app.component.css
h1 {
  color: #5d4f28;
}
nav a {
  padding: 15px 15px;
  background-color: gray;
  margin: 10px;
  color: inherit;
  text-decoration: none;
}

nav a:hover {
  color: #f5deb3;
  background-color: #5d4f28;
}

nav a.active {
  color: #f5deb3;
}
