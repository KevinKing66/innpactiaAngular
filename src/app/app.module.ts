import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { LoginService } from './login/login.service';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {  

token: string = localStorage.getItem("token") || "";

constructor(private services: LoginService) { 

  
    if(this.token){
      console.log("xd")
      this.services.verifyTokens({"token" : this.token}).subscribe(res => {
      let userData:any = res;
      sessionStorage.setItem("user", JSON.stringify(userData.authData));
    },
    );
    
    }else{
      console.log("srdftghj")
    }
}}
