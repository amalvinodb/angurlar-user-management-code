import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ManagementService } from "../../service/management.service";

@Component({
  selector: 'app-user-details-form',
  templateUrl: './user-details-form.component.html',
  styleUrls: ['./user-details-form.component.css']
})
export class UserDetailsFormComponent implements OnInit {
  
  UserName!:string | null;
  UserEmail!:string | null;
  UserId!:string|null;
  ngOnInit(): void {
    this.UserName = localStorage.getItem('userName');
    this.UserEmail = localStorage.getItem('userEmail');
    this.UserId = localStorage.getItem('Id');
  }
  constructor(private manage:ManagementService, private router:Router){}
  commitEdit(){
    const User={
      Name:this.UserName,
      Email:this.UserEmail,
      _id:this.UserId
    }
    this.manage.editUserDetails(User).subscribe((data)=>{
      
      if(data.status){
        localStorage.setItem('userName',this.UserName||"");
        localStorage.setItem('userEmail',this.UserEmail||"");
      }
      this.router.navigate(['user'])
    })
   
  }
}
