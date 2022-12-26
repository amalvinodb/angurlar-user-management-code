import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ManagementService } from '../../service/management.service';

@Component({
  selector: 'app-user-details-display',
  templateUrl: './user-details-display.component.html',
  styleUrls: ['./user-details-display.component.css'],
})
export class UserDetailsDisplayComponent implements OnInit {
  UserName!: string | null;
  UserEmail!: string | null;
  UserId!: string | null;
  url!:string|null;
  formdata = new FormData();
  checker = false;
  ngOnInit(): void {
    this.UserName = localStorage.getItem('userName');
    this.UserEmail = localStorage.getItem('userEmail');
    this.url = localStorage.getItem('image');
    this.UserId = localStorage.getItem('Id');
  }
  constructor(
    private route: Router,
    private manageServices: ManagementService
  ) {}

  editUser() {
    this.route.navigate(['editUser']);
  }
  selectImg(event: any) {
    // console.log(event.target.files[0])
    if (event.target.files[0]) {
      let reader = new FileReader();
      const formdata = new FormData();
      this.formdata.append('image', event.target.files[0]);
      this.formdata.append('upload_preset', 'hk0nezym');
      this.formdata.append('cloud_name', 'dchrawfgy');
      
      reader.readAsDataURL(event.target.files[0]);
      reader.onload = (event: any) => {
        this.url = event.target.result;
      };
    }
  }
  uploadImage() {
    this.manageServices.uploadImage(this.formdata).subscribe((data)=>{
      console.log(data);
      if(data.status){
        window.alert("image have been changed")
        localStorage.setItem('image',data.url)
      }else{
        window.alert("error occoured")
      }
      
    });
  }
}
