import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() {
    //
   }
   IsUserLoggedIn(){
    return !!localStorage.getItem('userTocken');
   }
   IsAdminLoggedIn(){
    console.log(localStorage.getItem('adminTocken'))
    return !!localStorage.getItem('adminTocken');
   }
}
