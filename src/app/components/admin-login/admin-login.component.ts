import { Component, OnInit } from '@angular/core';
import { AdminService } from '../../service/admin.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent {
  loginObj:any = {
    Name:"",
    Password:""
  }
  constructor(private adminServices:AdminService,private route:Router){}
  doLogin(){
    this.adminServices.dologin(this.loginObj).subscribe(data=>{
      console.log(data)
      if(data.status){
        localStorage.setItem('adminTocken',data.tocken);
        localStorage.setItem('adminName',data.admin.Name);
        localStorage.setItem('adminEmail',data.admin.Email);
        this.route.navigate(['admin'])
      }
    })
  }
}
