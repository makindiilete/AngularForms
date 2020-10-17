/*
A component consists of : -
1)  Template => View ==> HTML
2)  Class => Code ==> TypeScript ==> Contains your Data & Methods you use inside the view
3)  MetaData => This are the information on top of our class that makes angular decides if a class is an angular component or just a regular class.. The meta data contains a decorator which is a function in typescript that provides information about the class it is attached to.
  An angular class will have the '@Component({})' decorator with informations

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

*/

//STRUCTURE OF A REACT COMPONENT
//app.component.ts
import { Component } from '@angular/core';

// D component decorator metadata
@Component({
  selector: 'app-root', // a custom html tag dt can b use to represent ds component e.g. <app-root/> angular will render ds component whenever ds tag is used. ds selector is used in the index.html to render the app component
  templateUrl: './app.component.html', // ds point to d html file dt represents d view for ds component
  styleUrls: ['./app.component.css'] // array of css files dt is specific to ds component alone
})

// AppComponent class
export class AppComponent {
  // property of AppComponent
  title = 'AngularCompleteGuide';

  // No methods available
}

//app.component.html
//<h1>Welcome To AppComponent</h1>


/*
CREATING A NEW COMPONENT : - To create a new component via angular cli ==> ng g c componentName e.g. ng g c test..
This will create four new files : html, class, test file (.spec.ts) and css filr
An update will also be made to the app module to register the new component in the app module

App Module Declarations[] : - ds is where our newly created component is registered and it contains all d components dat belongs to the current module, since our app currently contain just one module, ds array contains all components inside the app
*/

//Using the test component inside the app component : - Using the selector of the test component, we can use the selector as html tag inside our root template to render its content in the screen

/*
<div>
<h1>Welcome to {{title}}</h1>
<app-test></app-test>
</div>
*/


/*
VARIOUS WAYS TO RENDER AND USE A SELECTOR IN ANGULAR COMPONENT
1)  The default way we have seen already

test.component.ts

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}


root template

<div>
  <h1>Welcome to {{title}}</h1>
  <app-test></app-test>
</div>


2)  Using the dot notation and then using the selector as a class name

test class

import { Component, OnInit } from '@angular/core';

@Component({
  selector: '.app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}


root template - using selector as a class

<div>
  <h1>Welcome to {{title}}</h1>
  <div class="app-test"></div>
</div>

3)  Using the selector as an html attribute

test class

import { Component, OnInit } from '@angular/core';

@Component({
  selector: '[app-test]',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}


root template : - using d selector as html attribute

<div>
  <h1>Welcome to {{title}}</h1>
  <div app-test></div>
</div>

*/




/*
HAVING YOUR TEMPLATE AND CLASS INSIDE THE SAME FILE JUST LIKE REACT : - Just as we have in react, we can have our template, data and methods inside the same class file, in this case, instead of putting the file path of the template in the templateUrl field, we render html tag and change 'templateUrl' to 'template'

test class

import { Component, OnInit } from '@angular/core';

@Component({
  selector: '[app-test]',
  template: '<div>Inline Template</div>',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}



TO RENDER MULTIPLE LINES TEMPLATES, USE ``


import { Component, OnInit } from '@angular/core';

@Component({
  selector: '[app-test]',
  template: `<div>Inline Template</div>
                <p>Inline Paragraph</p>`,
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

*/


/*
HAVING YOUR CSS INSIDE THE CLASS IN ANGULAR : - You can also have your css inside the class so everything are now inside the same file

import { Component, OnInit } from '@angular/core';

@Component({
  selector: '[app-test]',
  template: `<div>Inline Template</div>
                <p>Inline Paragraph</p>`,
  styles: ['div{color: red}']
})
export class TestComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

*/
