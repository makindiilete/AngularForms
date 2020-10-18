import { Component, OnInit } from '@angular/core';
import { User } from '../../bind-form-data-to-model/user';

@Component({
  selector: 'app-select-option-validation',
  templateUrl: './select-option-validation.component.html',
  styleUrls: ['./select-option-validation.component.css'],
})
export class SelectOptionValidationComponent {
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

  //ds method checks if the arg passed to it is 'default' and if dts d case, it set error to true or vice versa
  validateTopic(value: string) {
    value === 'default'
      ? (this.topicHasError = true)
      : (this.topicHasError = false);
  }
}
