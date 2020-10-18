import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-builder-service05',
  templateUrl: './form-builder-service05.component.html',
  styleUrls: ['./form-builder-service05.component.css'],
})
export class FormBuilderService05Component {
  constructor(private fb: FormBuilder) {}

  //Generating formControls with formBuilder
  registrationForm = this.fb.group({
    userName: ['', [Validators.required, Validators.minLength(3)]], // value, userName is required, userName must b at least 3digits
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
