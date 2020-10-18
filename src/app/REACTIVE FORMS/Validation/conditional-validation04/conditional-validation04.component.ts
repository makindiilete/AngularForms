import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { passwordValidator } from '../shared/password.validator';

@Component({
  selector: 'app-conditional-validation04',
  templateUrl: './conditional-validation04.component.html',
  styleUrls: ['./conditional-validation04.component.css'],
})
export class ConditionalValidation04Component implements OnInit {
  registrationForm: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    //Generating formControls with formBuilder
    this.registrationForm = this.fb.group({
      userName: [''],
      password: [''],
      confirmPassword: [''],
      address: this.fb.group({
        city: [''],
        state: [''],
        postalCode: [''],
      }),
      email: [''],
      subscribe: [false],
    });
    //we get the subscribe checkbox control
    this.registrationForm
      .get('subscribe')
      //we subscribe to its changes
      .valueChanges.subscribe((checkedValue) => {
        //we gt the email field
        const email = this.registrationForm.get('email');
        // if we check the newsletter checkbox
        if (checkedValue) {
          //we apply a required validation to the email field
          email.setValidators(Validators.required);
        } else {
          //if d checkbox is not checked, we clear the validators from email field
          email.clearValidators();
        }
        // we update the validation status
        email.updateValueAndValidity();
      });
  }

  // ds returns our userName formControl so we can simply call 'userName' wherever we needs it
  get userName() {
    return this.registrationForm.get('userName');
  }

  // ds returns our email formControl so we can simply call 'email' wherever we needs it
  get email() {
    return this.registrationForm.get('email');
  }
}
