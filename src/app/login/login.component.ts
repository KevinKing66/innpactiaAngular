import { Component, OnInit } from '@angular/core';
import { Form } from '@angular/forms';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm = {
    email: "",
    password : ""
  };
  token: string = localStorage.getItem("token") || "";
  logUp: boolean = false;


  constructor(private services: LoginService) { 
      if (this.token){
      this.services.verifyTokens({"token" : this.token}).subscribe(res => {
        let userData:any = res;
        sessionStorage.setItem("user", JSON.stringify(userData.authData));
      }
      )
      }
  }

  ngOnInit(): void {

  }
  
  login(){
    this.services.getToken(this.loginForm).subscribe(res => { 
      let token: any  = res;
      this.token = token.token;
      localStorage.setItem("token", this.token);
      this.services.verifyTokens(res).subscribe(resp => console.log(resp));
      });
  }

  logup(){
    this.services.create(this.loginForm).subscribe(res=>{
      console.log(res);
    },
    );
  }

  logUpF(){
    console.log(this.logUp)
    this.logUp ? this.logUp = false : this.logUp = true;
  }

}
