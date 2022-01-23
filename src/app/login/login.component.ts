import { Component, OnInit } from '@angular/core';
import { Form } from '@angular/forms';
import { UserModule } from '../models/user/user.module';
import { LoginService } from '../services/login.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm = {
    userName: "",
    email: "",
    password : ""
  };
  token: string = localStorage.getItem("token") || "";
  logUp: boolean = false;
  user: UserModule = {
    userName: "",
    email: "",
    password : ""
  };
  userB: boolean = false;


  constructor(private services: LoginService) { 
      if (this.token){
      this.services.verifyTokens({"token" : this.token}).subscribe(res => {
        let userData:any = res;
        sessionStorage.setItem("user", JSON.stringify(userData.authData));
        this.userB = true;
        this.user = userData.authData.user;
      },
      );
      };
  };

  ngOnInit(): void {

  }
  
  login(){
    this.services.getToken(this.loginForm).subscribe(res => { 
      let token: any  = res;
      this.token = token.token;
      localStorage.setItem("token", this.token);
      this.services.verifyTokens(res).subscribe(resp => {
        let userData:any = resp;
        this.user = userData.authData.user;
        sessionStorage.setItem("user", JSON.stringify(userData.authData));
      });
      });
      
    this.userB = true;
  }

  logup(){
    this.services.create(this.loginForm).subscribe(res=>{
      this.logUp ? this.logUp = false : this.logUp = true;
    },
    );
  }

  logUpF(){
    this.logUp ? this.logUp = false : this.logUp = true;
  }

  leave(){
    this.userB = false;
    localStorage.clear();
    sessionStorage.clear();
  }

}
