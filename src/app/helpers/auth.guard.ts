import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginService } from '../services/login.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  data: string | null = localStorage.getItem("token");

  constructor(private router: Router, private serviceLogin: LoginService){

  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
  
      if(this.data && !sessionStorage.getItem("user")){
        this.serviceLogin.verifyTokens({token : this.data}).subscribe(resp => {
          let userData:any = resp;
          sessionStorage.setItem("user", JSON.stringify(userData.authData));
        });
        
    }
    
    
    sessionStorage.getItem("user");
      return true;
  }
  
}
