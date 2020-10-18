import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { User } from '../bind-form-data-to-model/user';
import { catchError } from 'rxjs/operators'; //ds allows us to catch server errors
import { throwError } from 'rxjs'; // ds allows us to throw out the error

@Injectable({
  providedIn: 'root',
})
export class EnrollmentService {
  private _url = 'http://localhost:4300/enroll'; //api endpoint to submit the form data
  constructor(private _http: HttpClient) {}

  //ds method is called from a class to submit the form data to the server
  enroll(user: User) {
    return (
      this._http
        //make d post request
        .post<any>(this._url, user)
        // catch any error and assign it to an error handler
        .pipe(catchError(this.errorHandler))
    );
  }

  //gets d error as arg
  errorHandler(error: HttpErrorResponse) {
    // throw out the error to the component
    return throwError(error);
  }
}
