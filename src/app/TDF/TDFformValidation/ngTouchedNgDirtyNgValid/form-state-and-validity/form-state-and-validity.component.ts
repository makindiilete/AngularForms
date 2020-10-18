import { Component, OnInit } from '@angular/core';
import { User } from '../../../bind-form-data-to-model/user';

@Component({
  selector: 'app-form-state-and-validity',
  templateUrl: './form-state-and-validity.component.html',
  styleUrls: ['./form-state-and-validity.component.css'],
})
export class FormStateAndValidityComponent {
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
