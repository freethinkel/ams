import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { RequestOptions, Headers, Http, URLSearchParams, QueryEncoder } from '@angular/http';
import { map } from 'rxjs/operators/map';

@Injectable()
export class ApiService {

  constructor(private http: Http, @Inject('API_ROOT_URL') private apiRootUrl: string) { }

  get(url, paramsObj?) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Accept', 'application/json');
    // if (this.tokenService.token) {
    //   headers.append('Authorization', 'Bearer ' + this.tokenService.token);
    // }
    let params: URLSearchParams = new URLSearchParams('');
    if (paramsObj) {
      for (let param in paramsObj) {
        params.set(param, paramsObj[param]);
      }
    }
    return  this.http.get(`${this.apiRootUrl}${url}`, { headers: headers, params: params }).pipe(map(response => response.json()));
  }
}
