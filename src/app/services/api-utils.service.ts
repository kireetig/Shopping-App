import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiUtilsService {

  constructor(private http: HttpClient) {
  }

  getData() {
    const url = 'http://temp.dash.zeta.in/food.php';
    return this.http.get(url);
  }
}
