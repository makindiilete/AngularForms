import { Component, OnInit } from '@angular/core';
import { User } from '../bind-form-data-to-model/user';
import { EnrollmentService } from './enrollment.service';

@Component({
  selector: 'app-form-submission-to-server',
  templateUrl: './form-submission-to-server.component.html',
  styleUrls: ['./form-submission-to-server.component.css'],
})
export class FormSubmissionToServerComponent {
  userModel = new User(
    'Michael',
    'akin@akin.com',
    8109330138,
    'default',
    'morning',
    false
  );

  topics = ['Angular', 'React', 'Vue'];

  topicHasError = true;

  formSubmitted = false; // tracks form submission state so we can hide the form to prevent multiple submission
  serverError: string;

  constructor(private _enrollment: EnrollmentService) {}

  //ds method checks if the arg passed to it is 'default' and if dts d case, it set error to true or vice versa
  validateTopic(value: string) {
    value === 'default'
      ? (this.topicHasError = true)
      : (this.topicHasError = false);
  }

  //ds method is called to submit the form to the server
  onSubmit(userForm) {
    //return this.logFormData(userForm); // we call d 2nd method dt logs A-Z info abt the form submitted
    //Remove return from abt to really submit the form, leave it to examine form data
    this.formSubmitted = true; //ds fires and then update the form submission status to true so we can hide the form
    console.log(this.userModel);
    //We call the enrollment method in d service to submit the form
    this._enrollment
      .enroll(this.userModel)
      //we subscribe to its observable
      .subscribe(
        // on success
        (data) => console.log('Success!', data),
        // on failure
        (error) => (this.serverError = error.statusText)
      );
  }

  //ds method display to the console all abt the user form
  logFormData(userForm) {
    console.log(userForm);
  }
}
