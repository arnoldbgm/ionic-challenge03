import { Component} from '@angular/core';

@Component({
  selector: 'app-main-pg',
  templateUrl: './main-pg.page.html',
  styleUrls: ['./main-pg.page.scss'],
})
export class MainPgPage {
  data: any;

  constructor() {
    let session: any = localStorage.getItem('form');
    this.data = JSON.parse(session);
    localStorage.removeItem('form');
  }


}
