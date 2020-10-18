import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RegistrationService } from './registration.service';
import { log } from 'util';

@Component({
  selector: 'app-submit-form-to-server',
  templateUrl: './submit-form-to-server.component.html',
  styleUrls: ['./submit-form-to-server.component.css'],
})
export class SubmitFormToServerComponent implements OnInit {
  registrationForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private _registrationService: RegistrationService
  ) {}

  ngOnInit(): void {
    //Generating formControls with formBuilder
    this.registrationForm = this.fb.group({
      userName: ['', Validators.required],
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required],
      address: this.fb.group({
        city: [''],
        state: [''],
        postalCode: [''],
      }),
      email: ['', Validators.required],
      subscribe: [false],
      alternateEmails: this.fb.array([]), // U can start with empty array or certain number of controls
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

  // ds returns our alternate Email formControl so we can simply call 'alternateEmails' wherever we needs it
  get alternateEmails() {
    return this.registrationForm.get('alternateEmails') as FormArray;
  }

  //Every time ds method is called, a form control is pushed into the formArray of alternateEmails
  addAlternateEmails() {
    return this.alternateEmails.push(this.fb.control(''));
  }

  //Call ds method to post our form to server
  onSubmit() {
    console.log(this.registrationForm.value);
    this._registrationService
      .register(this.registrationForm.value)
      //we subscribe to its observable
      .subscribe(
        // on success
        (data) => console.log('Success!', data),
        // on failure
        (error) => console.log('Error!', error)
      );
  }
}
