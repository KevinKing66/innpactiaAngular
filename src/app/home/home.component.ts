import { Component, OnInit } from '@angular/core';
import { LoginService } from '../services/login.service';
import { WeatherService } from '../services/weather.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  token: string = localStorage.getItem("token") || "";
  user: any = {};
  city: string = "";
  info: any = "";
  queries: any = [];
  findB: boolean = false;
  ItemsPP: number = 5;
  filter: string = "";
  filterA: boolean = false;
  filterL: any =  []
  p: number = 1;
  constructor(private service: WeatherService, private serviceL: LoginService) {
    if (this.token){
      this.serviceL.verifyTokens({"token" : this.token}).subscribe(res => {
        let userData:any = res;
        sessionStorage.setItem("user", JSON.stringify(userData.authData));
        this.user = userData.authData.user;
      },
      );
      };
  }

  ngOnInit(): void {
  }

  getStatus(){
    
    this.service.get(this.city).subscribe(res => {
      this.info = res;
      this.sendQueries(res);

    }, error => console.log("escribe bien el nombre"));

  }

  sendQueries(x: object){
    this.user.queries.length ? this.user.queries.unshift(x): this.user.queries = [];
    if(this.user.queries.length == []){
      this.user.queries.unshift(x);
    };
    let send = this.user;
    sessionStorage.setItem("user", JSON.stringify(this.user));

    console.log(sessionStorage.getItem("user"))
    this.serviceL.queries(send).subscribe(res => {console.log(res)
    this.login()
  },
  );
  }

  onKeyDown($event: any){
    this.getStatus()
 
  }

  deleteQueries(){
    this.user.queries = [];
    sessionStorage.setItem("user", this.user);
    this.serviceL.queries(this.user).subscribe(res => {this.login});
  }


  login(){
    this.serviceL.getToken(this.user).subscribe(res => { 
      let token: any  = res;
      let tokenS = token.token;
      localStorage.setItem("token", tokenS);
      this.serviceL.verifyTokens(res).subscribe(resp => {
        let userData:any = resp;
        sessionStorage.setItem("user", JSON.stringify(userData.authData));
      });
      });
  }

  find(){
    this.findB  = this.findB ? false : true;
  }

  filterF(x: string){
    let i= 0;
    this.filterL =  []
    x.length > 1 ? this.filterA = true : this.filterL = false;

    while(i < this.user.queries.length && x.length > 2){
      if(this.user.queries[i].name.toLowerCase().includes(x)){
        this.filterL.push(this.user.queries[i]);
      };
      i++;
    }
    
    if(x.length < 3){
      this.filterL =  [];
      while(i < this.user.queries.length){
        this.filterL.push(this.user.queries[i]);
        i++;
      }
    }
  }

  
}