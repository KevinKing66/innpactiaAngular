import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaderResponse, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  uri = "http://localhost:3000";
  constructor(private http: HttpClient) {

  }

  getToken(x: any){
    let parameters = "/login";
    return this.http.post(this.uri+parameters, x);
   }
   

   verifyTokens(x: any){
     var headers = new HttpHeaders({
       'authorization' : `Bearer ${x.token}`
     })
    let parameters = "/login/auth";

    return this.http.post(this.uri+parameters,x, {headers});
  }

  create(x: any){
    let parameters = "/logup";
    return this.http.post(this.uri+parameters, x);
  }
  queries(x: object){
    let parameters = "/queriesSaver";
    return this.http.put(this.uri+parameters, x);
  }

 }

