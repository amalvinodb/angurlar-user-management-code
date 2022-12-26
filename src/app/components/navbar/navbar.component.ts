import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  constructor(private routes:Router){}
  userName = localStorage.getItem('userName');
  userEmail = localStorage.getItem('userEmail');
  isLoggedIn = !!localStorage.getItem('userTocken')
  logout(){
    localStorage.setItem('userTocken','');
    localStorage.setItem("userName",'');
    localStorage.setItem('userEmail','');
    localStorage.setItem('Id','');
    this.routes.navigate([''])
  }
  toUser(){
    this.routes.navigate(['user']);
  }

}
