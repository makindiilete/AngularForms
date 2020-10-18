import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { User } from '../../TDF/bind-form-data-to-model/user';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RegistrationService {
  private _url = 'http://localhost:4300/enroll'; //api endpoint to submit the form data
  constructor(private _http: HttpClient) {}

  //ds method is called from a class to submit the form data to the server
  register(userData) {
    return (
      this._http
        //make d post request
        .post<any>(this._url, userData)
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
