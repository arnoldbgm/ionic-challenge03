import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-pg',
  templateUrl: './main-pg.page.html',
  styleUrls: ['./main-pg.page.scss'],
})
export class MainPgPage implements OnInit {
  data: any;

  constructor() {
    let session: any = localStorage.getItem('form');
    this.data = JSON.parse(session);
    localStorage.clear();
  }

  ngOnInit() {}
}
