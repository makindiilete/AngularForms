import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-prefilled-form-controls04',
  templateUrl: './prefilled-form-controls04.component.html',
  styleUrls: ['./prefilled-form-controls04.component.css'],
})
export class PrefilledFormControls04Component {
  registrationForm =
    //Overall formGroup housing the whole form
    new FormGroup({
      userName: new FormControl('Michaelz'),
      password: new FormControl(''),
      confirmPassword: new FormControl(''),
      address:
        // nested formGroup capturing address details
        new FormGroup({
          city: new FormControl(''),
          state: new FormControl(''),
          postalCode: new FormControl(''),
        }),
    });

  // ds method will be called to set values for the all form controls we have in our form
  loadApiData() {
    // we call d setValue method on our overall form group and fill it out with data that matches d signature/structure.. all d values must be set for ds method to work
    this.registrationForm.setValue({
      userName: 'Michaelz',
      password: '123999abc',
      confirmPassword: '123999abc',
      address: {
        city: 'Ajah',
        state: 'Lagos',
        postalCode: '234',
      },
    });
  }

  // ds method is call to fill out only the username and passwords fields
  fillOnlyFewValues() {
    this.registrationForm.patchValue({
      userName: 'Michaelz',
      password: '123999abc',
      confirmPassword: '123999abc',
    });
  }
}
