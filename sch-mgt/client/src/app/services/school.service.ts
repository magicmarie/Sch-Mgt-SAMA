import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { Http, Headers, RequestOptions } from '@angular/http';


@Injectable()
export class SchoolService {
  options;

  constructor(private http: Http) { }

  createHeaders() {
    var headers = new Headers();
    headers.append('Content-Type', 'application/json');

  }

  getSchools() {
    return this.http.get('http://127.0.0.1:3000/api/v1/getSchools')
      .map(res => res.json());
  }

  addSchool(school) {
    console.log(school);
    var headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post('http://127.0.0.1:3000/api/v1/createSchool', JSON.stringify(school), { headers: headers })
      .map(res => res.json());
  }

  getOARation() {
    return this.http.get('http://127.0.0.1:3000/api/v1/o_a_ratio')
      .map(res => res.json());
  }






}
