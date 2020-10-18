import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-nested-form-group03',
  templateUrl: './nested-form-group03.component.html',
  styleUrls: ['./nested-form-group03.component.css'],
})
export class NestedFormGroup03Component {
  //Our form in the view has 3 field so we create an instance of formGroup(parent of the fields) and 3 form controls to represent each fields in our template.. U can pass a default value to the constructor (inside d bracket) of any of the form controls
  registrationForm =
    //Overall formGroup housing the whole form
    new FormGroup({
      userName: new FormControl('Michaelz'),
      password: new FormControl(''),
      confirmPassword: new FormControl(''),
      //  Now we have 3 more fields which we want to be nested as a mini formGroup under the overall formGroup and will be named 'address'
      address:
        // nested formGroup capturing address details
        new FormGroup({
          city: new FormControl(''),
          state: new FormControl(''),
          postalCode: new FormControl(''),
        }),
    });
}
