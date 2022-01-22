import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';


if(localStorage.getItem("token")){
var routes: Routes = [
  {path:'login', component: LoginComponent},
  {path:'home', component: HomeComponent},
  {path:'**', component: HomeComponent}
];
}else{
  var routes: Routes = [
    {path:'login', component: LoginComponent},
    {path:'**', redirectTo: 'login'}    
  ];
}

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

 }
