import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class UserModule {
  
    userName: String =  "";
    email: String = "";
    password: String = "";
    queries?: any[] = [];
 }
