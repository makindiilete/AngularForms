import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgFormngModelngModelGroupComponent } from './TDF/ng-formng-modelng-model-group/ng-formng-modelng-model-group.component';
import { BindFormDataToModelComponent } from './TDF/bind-form-data-to-model/bind-form-data-to-model.component';
import { FormStateAndValidityComponent } from './TDF/TDFformValidation/ngTouchedNgDirtyNgValid/form-state-and-validity/form-state-and-validity.component';
import { UserVisualFeedbackComponent } from './TDF/TDFformValidation/ngTouchedNgDirtyNgValid/user-visual-feedback/user-visual-feedback.component';
import { DisplayErrorMsgsComponent } from './TDF/TDFformValidation/display-error-msgs/display-error-msgs.component';
import { SelectOptionValidationComponent } from './TDF/TDFformValidation/select-option-validation/select-option-validation.component';
import { WholeFormValidationOnSubmitComponent } from './TDF/TDFformValidation/whole-form-validation-on-submit/whole-form-validation-on-submit.component';
import { FormSubmissionToServerComponent } from './TDF/form-submission-to-server/form-submission-to-server.component';
import { HttpClientModule } from '@angular/common/http';
import { AddFormHtmlComponent } from './REACTIVE FORMS/add-form-html01/add-form-html.component';
import { ReactiveFormModelComponent } from './REACTIVE FORMS/reactiveFormModule02/reactive-form-model.component';
import { NestedFormGroup03Component } from './REACTIVE FORMS/nested-form-group03/nested-form-group03.component';
import { PrefilledFormControls04Component } from './REACTIVE FORMS/prefilled-form-controls04/prefilled-form-controls04.component';
import { FormBuilderService05Component } from './REACTIVE FORMS/form-builder-service05/form-builder-service05.component';
import { SimpleValidation01Component } from './REACTIVE FORMS/Validation/simple-validation01/simple-validation01.component';
import { CustomValidation02Component } from './REACTIVE FORMS/Validation/custom-validation02/custom-validation02.component';
import { CrossFieldValidation03Component } from './REACTIVE FORMS/Validation/cross-field-validation03/cross-field-validation03.component';
import { ConditionalValidation04Component } from './REACTIVE FORMS/Validation/conditional-validation04/conditional-validation04.component';
import { AdditionalFormControls05Component } from './REACTIVE FORMS/Validation/additional-form-controls05/additional-form-controls05.component';
import { SubmitFormToServerComponent } from './REACTIVE FORMS/submit-form-to-server/submit-form-to-server.component';

@NgModule({
  declarations: [
    AppComponent,
    NgFormngModelngModelGroupComponent,
    BindFormDataToModelComponent,
    FormStateAndValidityComponent,
    UserVisualFeedbackComponent,
    DisplayErrorMsgsComponent,
    SelectOptionValidationComponent,
    WholeFormValidationOnSubmitComponent,
    FormSubmissionToServerComponent,
    AddFormHtmlComponent,
    ReactiveFormModelComponent,
    NestedFormGroup03Component,
    PrefilledFormControls04Component,
    FormBuilderService05Component,
    SimpleValidation01Component,
    CustomValidation02Component,
    CrossFieldValidation03Component,
    ConditionalValidation04Component,
    AdditionalFormControls05Component,
    SubmitFormToServerComponent,
  ],
  imports: [BrowserModule, HttpClientModule, ReactiveFormsModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
