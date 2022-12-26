import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class UnauthGuard implements CanActivate {
  constructor(private auth:AuthService,private router:Router){}
  canActivate():boolean{
    if(!this.auth.IsUserLoggedIn()){
      return true;
    }
    this.router.navigate(['user'])
    return false;
  }
  
}
