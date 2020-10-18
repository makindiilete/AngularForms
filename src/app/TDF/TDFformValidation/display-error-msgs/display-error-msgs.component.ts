import { Component, OnInit } from '@angular/core';
import { User } from '../../bind-form-data-to-model/user';

@Component({
  selector: 'app-display-error-msgs',
  templateUrl: './display-error-msgs.component.html',
  styleUrls: ['./display-error-msgs.component.css'],
})
export class DisplayErrorMsgsComponent {
  userModel = new User(
    'Michael',
    'akin@akin.com',
    8109330138,
    'Angular',
    'morning',
    false
  );

  topics = ['Angular', 'React', 'Vue'];
}
