import { AbstractControl, ValidatorFn } from '@angular/forms';

/*//d fn accepts d formControl to b validated which is a type of AbstractControl
export function forbiddenNameValidator(
  control: AbstractControl
): // if d validation fails, it return object with a string key and any as body and if it passes, it returns null
{ [key: string]: any } | null {
  const forbidden = /admin/.test(control.value); //if d formControl contains d string 'admin' we set the forbidden flag to true
  // if validation fails, return d object with 'forbiddenName' property else return null
  return forbidden ? { forbiddenName: { value: control.value } } : null;

  /!*the key 'forbiddenName' will be used in the template to access the error and the 'value' will b used to access the value typed in the formControl*!/
}*/

//We pass in the name we want to forbid
export function forbiddenNameValidator(forbiddenName: RegExp): ValidatorFn {
  return (
    control: AbstractControl
  ): // if d validation fails, it return object with a string key and any as body and if it passes, it returns null
  { [key: string]: any } | null => {
    //pass in the name to be forbidden
    const forbidden = forbiddenName.test(control.value);
    // if validation fails, return d object with 'forbiddenName' property else return null
    return forbidden ? { forbiddenName: { value: control.value } } : null;
  };
}
