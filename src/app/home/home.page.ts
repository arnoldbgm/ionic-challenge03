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

  myForm = new FormGroup({
    username: new FormControl('', Validators.required),
    email: new FormControl('', [
      Validators.required,
      // Validators.pattern(
      //   '/^([a-zA-Z0-9_.]+)@([a-zA-Z0-9_.]+).([a-zA-Z]{2,5})$'
      // ),
      Validators.email
    ]),
  });

  onSubmit() {
    this.datos = this.myForm.value;
    localStorage.setItem('form', JSON.stringify(this.datos));
    this.myForm.reset();
  }
}
