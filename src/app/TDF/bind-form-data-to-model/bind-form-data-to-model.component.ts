import { Component, OnInit } from '@angular/core';
import { User } from './user';

@Component({
  selector: 'app-bind-form-data-to-model',
  templateUrl: './bind-form-data-to-model.component.html',
  styleUrls: ['./bind-form-data-to-model.component.css'],
})
export class BindFormDataToModelComponent {
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
