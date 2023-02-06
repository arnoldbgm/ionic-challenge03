import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ShareDataService } from '../services/share-data.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  constructor(private router: Router, private shared: ShareDataService) {}

  datos: any;
  optionBtn: boolean = false;
  passwordIcon: boolean = false;
  passwordType: string = 'password';
  validatorName: any = "^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$";

  myForm = new FormGroup({
    username: new FormControl('', [
      Validators.required,
      Validators.pattern(this.validatorName),
    ]),
    password: new FormControl('', [Validators.required]),
    optionBtn: new FormControl(),
  });

  onSubmit() {
    this.datos = this.myForm.value;
    localStorage.setItem('form', JSON.stringify(this.datos));
    if (this.datos.optionBtn) {
      this.router.navigateByUrl('/main-pg');
      return;
    }
    this.myForm.reset();
    this.router.navigateByUrl('/main-pg');
  }

  showPassword() {
    if (this.passwordType === 'text') {
      this.passwordIcon = false;
      this.passwordType = 'password';
    } else {
      this.passwordIcon = true;
      this.passwordType = 'text';
    }
  }
}
