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
    ]),
  });

  onSubmit() {
    this.datos = this.myForm.value;
    localStorage.setItem('form', JSON.stringify(this.datos));
    this.myForm.reset();
    this.router.navigateByUrl('/main-pg');
  }

  onSubmitPage2() {
    this.datos = this.myForm.value;
    this.router.navigateByUrl(
      `/second-pg/${this.datos.username}/${this.datos.email}`
    );
  }

  onSubmitPage3() {
    this.datos = this.myForm.value;
    this.shared.setData(this.datos);
    this.router.navigateByUrl('/third-pg');
  }
}
