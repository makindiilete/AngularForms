/*
Pipes : - Pipes allows us to transform the format of a data before displaying them in the view.

NOTE: - Pipes only transform the property in the view, it does not transform/modified the property value in the class
*/
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  template: `<h2>{{ name }}</h2>
    <!--  STRING PIPES-->
    <!--    lowercase-->
    <!--  michaelz-->
    <h2>{{ name | lowercase }}</h2>
    <!--    uppercase-->
    <!--  MICHAELZ -->
    <h2>{{ name | uppercase }}</h2>
    <!--    titleCase/ Sentence case-->
    <!--   Welcome To Michaelz Omoakin Fx-->
    <h2>{{ message | titlecase }}</h2>
    <!--    slice : - cut of some part of d string and returning d remaining part.. It will slice out every letters below index of 2-->
    <!--  chaelz -->
    <h2>{{ name | slice: 2 }}</h2>
    <!--  slice from a specific index to a specific index i.e. return characters from d index of 3 to 7 but will not include d character at index 7-->
    <!--  hael -->
    <h2>{{ name | slice: 3:7 }}</h2>
    <!--JSON PIPE : - gives u d json representation of an object-->
    <!--  { "firstName": "John", "lastName": "Doe" } -->
    <h2>{{ person | json }}</h2>
    <!--  NUMBER PIPES-->
    <!-- number: '1.2-3' = 5.678 => 1 digit b4 decimal and 3 digit max after -->
    <h2>{{ 5.678 | number: '1.2-3' }}</h2>
    <!-- number: '3.4-5' = 005.6780 => 3 digit b4 decimal and 5 digit max after (005.67800 doesnt make sense to av multiple zeros after decimal) -->
    <h2>{{ 5.678 | number: '3.4-5' }}</h2>
    <!-- number: '3.1-2' = 005.68 => 3 digit b4 decimal and 2 digit max after (rounded 678 to 68) -->
    <h2>{{ 5.678 | number: '3.1-2' }}</h2>
    <!--  PERCENTAGE PIPE : - Gives d percentage representation of a number-->
    <!--  25%-->
    <h2>{{ 0.25 | percent }}</h2>
    <!--  CURRENCY PIPE-->
    <!--  $0.25-->
    <h2>{{ 0.25 | currency }}</h2>
    <!--  Specific currency  GBP currency-->
    <!--   £0.25 -->
    <h2>{{ 0.25 | currency: 'GBP' }}</h2>
    <!--  Display d currency code and not the symbol -->
    <!--  GBP0.25-->
    <h2>{{ 0.25 | currency: 'GBP':'code' }}</h2>
    <!--  DATE PIPES-->
    <!-- short date format 9/21/20, 12:33 PM-->
    <h2>{{ date | date: 'short' }}</h2>
    <!--    Get only the date excluding the time-->
    <!--  9/21/20-->
    <h2>{{ date | date: 'shortDate' }}</h2>
    <!--    Get only the time excluding the date-->
    <!--  12:35 PM-->
    <h2>{{ date | date: 'shortTime' }}</h2>
    <!-- medium date Sep 21, 2020, 12:36:35 PM-->
    <h2>{{ date | date: 'medium' }}</h2>
    <!--    Get only the date excluding the time-->
    <!--  Sep 21, 2020-->
    <h2>{{ date | date: 'mediumDate' }}</h2>
    <!--    Get only the time excluding the date-->
    <!--  12:36:35 PM-->
    <h2>{{ date | date: 'mediumTime' }}</h2>
    <!-- long date September 21, 2020 at 12:37:30 PM GMT+1-->
    <h2>{{ date | date: 'long' }}</h2>
    <!--    Get only the date excluding the time-->
    <!--  September 21, 2020-->
    <h2>{{ date | date: 'longDate' }}</h2>
    <!--    Get only the time excluding the date-->
    <!--  12:37:30 PM GMT+1-->
    <h2>{{ date | date: 'longTime' }}</h2> `,
  styleUrls: ['./pipes.component.css'],
})
export class PipesComponent {
  name = 'Michaelz';
  message = 'welcome to michaelz omoakin fx';
  person = {
    firstName: 'John',
    lastName: 'Doe',
  };
  date = new Date();
}
