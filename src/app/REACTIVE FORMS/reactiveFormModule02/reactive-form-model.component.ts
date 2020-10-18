import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-reactive-form-model',
  templateUrl: './reactive-form-model.component.html',
  styleUrls: ['./reactive-form-model.component.css'],
})
export class ReactiveFormModelComponent implements OnInit {
  //Our form in the view has 3 field so we create an instance of formGroup(parent of the fields) and 3 form controls to represent each fields in our template.. U can pass a default value to the constructor (inside d bracket) of any of the form controls
  registrationForm = new FormGroup({
    userName: new FormControl('Michaelz'),
    password: new FormControl(''),
    confirmPassword: new FormControl(''),
  });

  constructor() {}

  ngOnInit(): void {}
}
