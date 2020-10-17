/*
In the last video, we use the snapshot of the activated route to retrieve the route params but this approach has a draw back... We will discuss the draw back and the solution..

Let us improve on how routing app and inside the department details component, we want to add a Previous and Next button. The Previous button should navigate us to the previous department in the array and the next should navigate us to the next department in the array

DOWNSIDE
The downside of using the snapshot in this case is that when the param changes in the url and the component where we want to read the changes is the same component we are in, the snapshot does not pick this change, so for this case scenario,

SOLUTION

we need to use the paramMap.subscribe() observable which is able to detect changes in the url and update the component even if it is the same component we are in
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
}
