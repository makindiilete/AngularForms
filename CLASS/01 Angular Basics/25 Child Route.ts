/*
In angular apps, some route may only be viewed within other route..

For example, we want to add a new route to display the overview of a selected department and also we will like to have another route to display the contact of a selected department..

These details are supposed to be part of the department details route so we should only be able to navigate to them from the department detail route..

1)  Generate two new component : - department-overview & department-contact
2)  In the routing module, add a new property 'children[]' which is an array of the child routes of d specific component
3)  Add the router-outlet directive to the parent component template
*/

//app-routing.module.ts

import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { DepartmentListComponent } from "./department-list/department-list.component";
import { EmployeeListComponent } from "./employee-list/employee-list.component";
import { NotFoundPageComponent } from "./not-found-page/not-found-page.component";
import { DepartmentDetailComponent } from "./department-detail/department-detail.component";
import { DepartmentOverviewComponent } from "./department-overview/department-overview.component";
import { DepartmentContactComponent } from "./department-contact/department-contact.component";

const routes: Routes = [
  //Homepage will be redirected to /departments route
  { path: "", redirectTo: "/departments", pathMatch: "full" },
  { path: "departments", component: DepartmentListComponent },
  //':id' is d placeholder/variable of our route params and since we are passing department id, we name it :id... if we are passing name, we sud name it :name
  {
    path: "departments/:id",
    component: DepartmentDetailComponent,
    // Here we specify the children routes of d department details component
    children: [
      { path: "overview", component: DepartmentOverviewComponent },
      { path: "contact", component: DepartmentContactComponent },
    ],
  },
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
  DepartmentDetailComponent,
  DepartmentOverviewComponent,
  DepartmentContactComponent,
];

//department-detail.component.ts

import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, ParamMap, Router } from "@angular/router";

@Component({
  selector: "app-department-detail",
  template: `
    <h3>You selected department with the id = {{ departmentId }}</h3>
    <p>
      <button (click)="showOverview()" style="margin-right: 10px">
        Show Overview
      </button>
      <button (click)="showContact()">Show Contact</button>
    </p>
    <router-outlet></router-outlet>
    <a (click)="goPrevious()">Previous</a>
    <a (click)="goNext()">Next</a>
    <div>
      <button (click)="goToDepartments()">Back</button>
    </div>
  `,
  styles: [
    `
      a {
        color: #5d4f28;
        font-weight: bolder;
        margin: 0 10px;
        cursor: pointer;
      }
      h3 {
        margin-bottom: 100px;
      }
      button {
        background-color: #5d4f28;
        color: wheat;
        border: none;
        padding: 15px;
        cursor: pointer;
        margin-top: 10px;
      }
      button:hover {
        background-color: wheat;
        color: #5d4f28;
      }
    `,
  ],
})
export class DepartmentDetailComponent implements OnInit {
  departmentId: number;
  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    // on component mount, from the current route snapshot, get the id parameter and assign it to the local Variable Id
    // this.departmentId = parseInt(this.route.snapshot.paramMap.get('id'));
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.departmentId = parseInt(params.get("id"));
    });
  }

  goPrevious() {
    let previousId = this.departmentId > 1 ? this.departmentId - 1 : 1;
    this.router.navigate(["/departments", previousId]);
    this.router.navigate(["/departments", previousId]);
  }

  goNext() {
    let nextId = this.departmentId < 5 ? this.departmentId + 1 : 5;
    this.router.navigate(["/departments", nextId]);
    this.router.navigate(["/departments", nextId]);
  }

  goToDepartments() {
    let selectedId = this.departmentId ? this.departmentId : null;
    // navigating back to the department list view with an optional parameter of 'id' whose value is the currently selected department Id
    this.router.navigate(["/departments", { id: selectedId }]);
  }

  // CHILD ROUTES
  showOverview() {
    // to the current route i.e. http://localhost:4200/departments/departmentId , append 'overview' ==> http://localhost:4200/departments/3/overview
    this.router.navigate(["overview"], { relativeTo: this.route });
  }

  showContact() {
    // to the current route i.e. http://localhost:4200/departments/departmentId , append 'contact' ==> http://localhost:4200/departments/3/contact
    this.router.navigate(["contact"], { relativeTo: this.route });
  }
}
