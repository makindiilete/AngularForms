/*
What are optional route parameters?
These are route parameters that their existence does not affect the view, they are optional but can be used to perform some logic in the view but with or without them, the view will still be rendered...

Now we want to take our app a step further: -
We want to have a back button in the department detail component and when we click this button, it should take us back to the department list component with the previously selected department highlighted... We can achieve this using optional route parameter
*/

//department-detail.component.ts
import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, ParamMap, Router } from "@angular/router";

@Component({
  selector: "app-department-detail",
  template: `
    <h3>You selected department with the id = {{ departmentId }}</h3>

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
  }

  goNext() {
    let nextId = this.departmentId < 5 ? this.departmentId + 1 : 5;
    this.router.navigate(["/departments", nextId]);
  }

  goToDepartments() {
    let selectedId = this.departmentId ? this.departmentId : null;
    // navigating back to the department list view with an optional parameter of 'id' whose value is the currently selected department Id
    this.router.navigate(["/departments", { id: selectedId }]);
  }
}

//department-list.component.ts

import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, ParamMap, Router } from "@angular/router";

@Component({
  selector: "app-department-list",
  template: `
    <h3>Department List</h3>
    <ul>
      <!--      if isSelected() returns true, we use 'selected' class else we use 'items' class-->
      <li
        (click)="onSelect(dept)"
        *ngFor="let dept of departments"
        [class]="isSelected(dept) ? 'selected' : 'items'"
      >
        <span class="badge">{{ dept.id }}</span
        >{{ dept.name }}
      </li>
    </ul>
  `,
  styles: [
    `
      .selected {
        padding: 20px;
        background-color: rgba(0, 0, 0, 0.53);
        color: white;
        margin: 10px;
        width: 150px;
        list-style: none;
        cursor: pointer;
        border-radius: 15px;
      }

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
  selectedId;
  departments = [
    { id: 1, name: "Angular" },
    { id: 2, name: "Node" },
    { id: 3, name: "MongoDB" },
    { id: 4, name: "Ruby" },
    { id: 5, name: "Bootstrap" },
  ];

  // inject the router for navigation
  constructor(private router: Router, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.selectedId = parseInt(params.get("id"));
    });
  }

  //ds method will navigate us using the router class to "/departments/departmentId"
  onSelect(department) {
    // U enter the route u want to navigate to and the route params u want to add
    this.router.navigate(["/departments", department.id]);
  }

  // we take d list of all departments and return true for the one dt the id equals to the current selectedId in the url optional params
  isSelected(department) {
    return department.id === this.selectedId;
  }
}
