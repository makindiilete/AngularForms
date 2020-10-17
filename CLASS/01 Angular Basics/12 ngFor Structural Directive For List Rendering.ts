/*
We use the ngFor directive to render a list in the view
*/
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-for-structural-directive',
  template: `
    <!--    Rendering a list-->
    <div *ngFor="let color of colors">
      <h2>{{ color }}</h2>
    </div>
    <!--    Rendering a list with index-->
    <div *ngFor="let color of colors; index as i">
      <h2>{{ i }} - {{ color }}</h2>
    </div>
    <!--    Rendering a list and checking for the first element in d list-->
    <div *ngFor="let color of colors; first as f">
      <!--      ds render d list and mark d first element as true and others as false-->
      <h2>{{ f }} - {{ color }}</h2>
    </div>
    <!--    Rendering a list and checking for the last element in d list-->
    <div *ngFor="let color of colors; last as l">
      <h2>{{ l }} - {{ color }}</h2>
    </div>
    <!--    Rendering a list and checking for elements with odd index in d list-->
    <div *ngFor="let color of colors; index as i; odd as o">
      <h2>{{ i }} - {{ color }} - Odd => {{ o }}</h2>
    </div>
    <!--    Rendering a list and checking for elements with even index in d list-->
    <div *ngFor="let color of colors; index as i; even as e">
      <h2>{{ i }} - {{ color }} - Even => {{ e }}</h2>
    </div>
  `,
  styleUrls: ['./ng-for-structural-directive.component.css'],
})
export class NgForStructuralDirectiveComponent {
  colors = ['red', 'blue', 'green', 'yellow'];
}
