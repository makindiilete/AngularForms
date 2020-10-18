import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { passwordValidator } from '../shared/password.validator';

@Component({
  selector: 'app-cross-field-validation03',
  templateUrl: './cross-field-validation03.component.html',
  styleUrls: ['./cross-field-validation03.component.css'],
})
export class CrossFieldValidation03Component {
  constructor(private fb: FormBuilder) {}

  //Generating formControls with formBuilder
  registrationForm = this.fb.group(
    {
      userName: [''],
      password: [''],
      confirmPassword: [''],
      address: this.fb.group({
        city: [''],
        state: [''],
        postalCode: [''],
      }),
    },
    //we pass the password cross field validator as a 2nd arg to the formGroup class
    { validators: passwordValidator }
  );

  // ds returns our userName formControl so we can simply call 'userName' wherever we needs it
  get userName() {
    return this.registrationForm.get('userName');
  }
}
