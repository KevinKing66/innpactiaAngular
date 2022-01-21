import { Component, OnInit } from '@angular/core';
import { Form } from '@angular/forms';
import { UserModule } from '../models/user/user.module';
import { LoginService } from './login.service';

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


  constructor(private services: LoginService) { 
      if (this.token){
      this.services.verifyTokens({"token" : this.token}).subscribe(res => {
        let userData:any = res;
        sessionStorage.setItem("user", JSON.stringify(userData.authData));
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
        console.log(userData.authData.user)
        sessionStorage.setItem("user", JSON.stringify(userData.authData));
      });
      });
  }

  logup(){
    this.services.create(this.loginForm).subscribe(res=>{
      console.log(res);
      this.logUp ? this.logUp = false : this.logUp = true;
    },
    );
  }

  logUpF(){
    this.logUp ? this.logUp = false : this.logUp = true;
  }

  leave(){
    localStorage.clear();
    sessionStorage.clear();
  }

}
