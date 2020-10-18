import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { forbiddenNameValidator } from '../shared/forbiddenName.validator';

@Component({
  selector: 'app-custom-validation02',
  templateUrl: './custom-validation02.component.html',
  styleUrls: ['./custom-validation02.component.css'],
})
export class CustomValidation02Component {
  constructor(private fb: FormBuilder) {}

  //Generating formControls with formBuilder
  registrationForm = this.fb.group({
    userName: [
      '',
      [
        Validators.required,
        Validators.minLength(3),
        forbiddenNameValidator(/password/), //pass to the custom validator fn the value to be forbidden
      ],
    ], // value, userName is required, userName must b at least 3digits
    password: [''],
    confirmPassword: [''],
    address: this.fb.group({
      city: [''],
      state: [''],
      postalCode: [''],
    }),
  });

  // ds returns our userName formControl so we can simply call 'userName' wherever we needs it
  get userName() {
    return this.registrationForm.get('userName');
  }
}
