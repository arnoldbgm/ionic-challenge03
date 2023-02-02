import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ShareDataService {
  dataService: any;

  constructor() {}

  setData(data: any) {
    this.dataService = data;
  }

  getData() {
    return this.dataService;
  }
}
