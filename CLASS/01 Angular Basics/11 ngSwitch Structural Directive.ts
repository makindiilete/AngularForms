/*
The ngSwitch is the switch case of any programming language with the only difference that here you render html elements instead of executing some logic, You use ngSwitch when you have to compare multiple values
*/

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-switch-sturctural-directive',
  template: `
    <h1>ngSwitch Directive</h1>
    <!--    D switch tag : d variable we are checking for is 'color' defined in the class-->
    <div [ngSwitch]="color">
      <!--      Cases-->
      <!--      case 'red' : render this element-->
      <h4 *ngSwitchCase="'red'">You picked red</h4>
      <!--      case 'blue' : render this element-->
      <h4 *ngSwitchCase="'blue'">You picked blue</h4>
      <!--      case 'black' : render this element-->
      <h4 *ngSwitchCase="'black'">You picked black</h4>
      <!--      case 'default' : render this element-->
      <h4 *ngSwitchDefault>Pick Again</h4>
    </div>
  `,
  styleUrls: ['./ng-switch-sturctural-directive.component.css'],
})
export class NgSwitchSturcturalDirectiveComponent {
  color = 'orange';
}
