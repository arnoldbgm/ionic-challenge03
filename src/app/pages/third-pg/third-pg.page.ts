import { Component } from '@angular/core';
import { ShareDataService } from 'src/app/services/share-data.service';

@Component({
  selector: 'app-third-pg',
  templateUrl: './third-pg.page.html',
  styleUrls: ['./third-pg.page.scss'],
})
export class ThirdPgPage {
  data: any;
  constructor(private shared: ShareDataService) {
    this.data = this.shared.getData();
  }
}
