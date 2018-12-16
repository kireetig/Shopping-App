import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StoreService {

  constructor() {
  }

  data = {};

  setData(data) {
    this.data = {
      ...this.data,
      ...data,
    };
  }

  getData() {
    return this.data;
  }

}
