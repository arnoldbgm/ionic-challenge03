import { Component, OnInit } from '@angular/core';
import { GetDataService } from '../services/get-data.service';
import { ComponentLista } from '../interface/componente-lista';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  dataJson!: Array<ComponentLista>;

  constructor(public RestData: GetDataService) {}

  ngOnInit() {
    this.RestData.getData().subscribe(
      (data) => {
        this.dataJson = data;
      },
      (error) => {
        console.log('error', error);
      }
    );
  }
}
