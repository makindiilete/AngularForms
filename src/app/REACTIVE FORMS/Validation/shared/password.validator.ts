import { AbstractControl } from '@angular/forms';

//d control passed to ds fn as arg represent the formGroup and not a single formControl, ds is d case since we want to validate multiple fields comparing their values so from d formGroup we can extract the individual controls we want to validate against
export function passwordValidator(
  formGroup: AbstractControl
): // if d validation fails, return a string key with boolean value else return null
{ [key: string]: boolean } | null {
  const password = formGroup.get('password'); // retrieve d password field from d formGroup
  const confirmPassword = formGroup.get('confirmPassword'); // retrieve d confirm password field from d formGroup
  // if password has not bin touched or d confirmPassword field has not bin touched then dont validate yet
  if (password.pristine || confirmPassword.pristine) {
    return null;
  } else {
    // if password and confirmPassword is not blank and the password value does not match the confirm password value, return an object { passwordMisMatch: true } else return null
    return password &&
      confirmPassword &&
      password.value !== confirmPassword.value
      ? { passwordMisMatch: true }
      : null;
  }
}
