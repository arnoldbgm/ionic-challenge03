import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  constructor() {
    localStorage.clear();
  }

  datos: any;
  validator: any = '^[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$';
  validatorName: any = "^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$";

  myForm = new FormGroup({
    username: new FormControl('', [
      Validators.required,
      Validators.pattern(this.validatorName),
    ]),
    email: new FormControl('', [
      Validators.required,
      Validators.pattern(this.validator),
      Validators.email,
    ]),
  });

  onSubmit() {
    this.datos = this.myForm.value;
    localStorage.setItem('form', JSON.stringify(this.datos));
    this.myForm.reset();
  }
}
