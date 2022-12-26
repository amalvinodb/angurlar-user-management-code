import { Component, OnInit } from '@angular/core';
import { AdminService } from '../../service/admin.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-pannel',
  templateUrl: './admin-pannel.component.html',
  styleUrls: ['./admin-pannel.component.css']
})
export class AdminPannelComponent implements OnInit {
  searchTearm!:string;
  allUsers:any;
  constructor(private adminServices:AdminService,private route:Router){}
  async ngOnInit(): Promise<void> {
    await this.adminServices.getAllUsers().subscribe((data)=>{
      if(data.status){
       this.allUsers = data.users;
      }
      
    })
  }
  adminLogout(){
    localStorage.setItem('adminTocken','');
    localStorage.setItem('adminName','');
    localStorage.setItem('adminEmail','');
    this.allUsers = null;
    this.route.navigate(['adminLogin'])
  }
  deleteUser(data:any){
    this.adminServices.deleteUser(data).subscribe( (data)=>{
      window.alert("user have been deleted")
      location.reload()
    })
  }
  async search(){
    await this.adminServices.searchUser(this.searchTearm).subscribe((data)=>{
      this.allUsers=data.data;
    })
  }
}
