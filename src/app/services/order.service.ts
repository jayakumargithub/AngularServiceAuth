import { AuthHttp } from 'angular2-jwt/angular2-jwt';
import { Http, RequestOptions, Headers } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

@Injectable()
export class OrderService {

  constructor(private http: AuthHttp) {
  }

  getOrders() {

    /*
    //if you use just Http
    const headers = new Headers();
    const token = localStorage.getItem('token');
    headers.append('Authorization', 'Bearer ' + token);
    const options = new RequestOptions({headers : headers});
    return this.http.get('/api/orders', options)
*/

    return this.http.get('/api/orders')
      .map(response => response.json());
  }
}
