/*
In this video, we will learn how to pass and read route parameters.. Route parameters always comes in the format : "https://localhost:4200/departmentList/1". 1 here is d parameter of the route.

We are going to have a list of departments in our DepartmentList component and each department is going to have an id and when we navigate to the department details, we pass along the id as route parameter and in the department details component we render the text "You Selected Department With Id = 1"
*/

//app-routing.module.ts
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { DepartmentListComponent } from "./department-list/department-list.component";
import { EmployeeListComponent } from "./employee-list/employee-list.component";
import { NotFoundPageComponent } from "./not-found-page/not-found-page.component";
import { DepartmentDetailComponent } from "./department-detail/department-detail.component";

const routes: Routes = [
  //Homepage will be redirected to /departments route
  { path: "", redirectTo: "/departments", pathMatch: "full" },
  { path: "departments", component: DepartmentListComponent },
  //':id' is d placeholder/variable of our route params and since we are passing department id, we name it :id... if we are passing name, we sud name it :name
  { path: "departments/:id", component: DepartmentDetailComponent },
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
];

//department-list.component,ts
import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-department-list",
  template: `
    <h3>Department List</h3>
    <ul>
      <li
        (click)="onSelect(dept)"
        *ngFor="let dept of departments"
        class="items"
      >
        <span class="badge">{{ dept.id }}</span
        >{{ dept.name }}
      </li>
    </ul>
  `,
  styles: [
    `
      .items {
        padding: 20px;
        background-color: #5d4f28;
        color: wheat;
        margin: 10px;
        width: 150px;
        list-style: none;
        cursor: pointer;
        border-radius: 15px;
      }
      .items:hover {
        transform: scale(1.2);
        transition: all 0.5s ease-in-out;
      }
      .badge {
        border-bottom-left-radius: 15px;
        border-top-left-radius: 15px;
        background-color: wheat;
        color: #5d4f28;
        padding: 20px;
        margin-right: 10px;
        margin-left: -20px;
      }
    `,
  ],
})
export class DepartmentListComponent implements OnInit {
  departments = [
    { id: 1, name: "Angular" },
    { id: 2, name: "Node" },
    { id: 3, name: "MongoDB" },
    { id: 4, name: "Ruby" },
    { id: 5, name: "Bootstrap" },
  ];

  // inject the router for navigation
  constructor(private router: Router) {}

  ngOnInit(): void {}

  //ds method will navigate us using the router class to "/departments/departmentId"
  onSelect(department) {
    // U enter the route u want to navigate to and the route params u want to add
    this.router.navigate(["/departments", department.id]);
  }
}

//department-detail.component.ts
import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-department-detail",
  template: `
    <h3>You selected department with the id = {{ departmentId }}</h3>
  `,
  styles: [],
})
export class DepartmentDetailComponent implements OnInit {
  departmentId: number;
  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    // on component mount, from the current route snapshot, get the id parameter and assign it to the local Variable Id
    this.departmentId = parseInt(this.route.snapshot.paramMap.get("id"));
  }
}
