import { Component, OnInit } from '@angular/core';
import { User } from '../../../bind-form-data-to-model/user';

@Component({
  selector: 'app-user-visual-feedback',
  templateUrl: './user-visual-feedback.component.html',
  styleUrls: ['./user-visual-feedback.component.css'],
})
export class UserVisualFeedbackComponent {
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
