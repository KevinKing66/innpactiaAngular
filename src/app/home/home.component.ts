import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login/login.service';
import { WeatherService } from '../services/weather.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  x: string = sessionStorage.getItem("user") || "";
  user: any = JSON.parse(this.x);
  city: string = "";
  info: any = "";
  queries: any = [] ;

  constructor(private service: WeatherService, private serviceL: LoginService) {
  this.user
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
    this.user.queries ? this.user.queries.push(x): this.user.queries = [];
    if (!this.user.queries.length){
      this.user.queries.push(x);
    };
    sessionStorage.setItem("user", this.user);
    this.serviceL.queries(this.user).subscribe(res => {console.log(res)
    this.login()
  }
  );
  }



  deleteQueries(){
    this.user.queries = [];
    this.serviceL.queries(this.user).subscribe(res => {console.log(res)});
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
}
