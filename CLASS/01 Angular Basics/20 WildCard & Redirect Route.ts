/*
WILD CARD ROUTE : - This is use to display a not found page whenever no matching route is found
REDIRECT ROUTE : - This is used when we want to redirect a path to a specific route.. U can use this to redirect user to a HomeComponent when the enter the root url of the app
*/

import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { DepartmentListComponent } from "./department-list/department-list.component";
import { EmployeeListComponent } from "./employee-list/employee-list.component";
import { NotFoundPageComponent } from "./not-found-page/not-found-page.component";

const routes: Routes = [
  //Homepage will be redirected to /departments route
  { path: "", redirectTo: "/departments", pathMatch: "full" },
  { path: "departments", component: DepartmentListComponent },
  { path: "employees", component: EmployeeListComponent },
  //any route dt does not match any of the route above will be redirected to this page
  { path: "**", component: NotFoundPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
export const routingComponents = [
  DepartmentListComponent,
  EmployeeListComponent,
  NotFoundPageComponent,
];

//Not-found-page.component.ts
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-not-found-page",
  template: ` <h3>Page Not Found</h3> `,
  styles: [],
})
export class NotFoundPageComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}

//app.module.ts
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule, routingComponents } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { NotFoundPageComponent } from "./not-found-page/not-found-page.component";

@NgModule({
  declarations: [AppComponent, routingComponents],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
