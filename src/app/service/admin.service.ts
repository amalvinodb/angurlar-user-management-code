/* eslint-disable @typescript-eslint/no-explicit-any */
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
const httpOptons = {
  headers: new HttpHeaders({
    'content-type': 'application/json',
    'autharization':localStorage.getItem('adminTocken') || " "
  }),
};

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  getPosts() {
      throw new Error('Method not implemented.');
  }
  private apiurl = 'http://localhost:3000/';
  constructor(private http: HttpClient) {}
  dologin(admin: any): Observable<any> {
    return this.http.post<any>(
      `${this.apiurl}adminLogin`,
      JSON.stringify(admin),
      httpOptons
    );
  }
  getAllUsers(){
    return this.http.get<any>(`${this.apiurl}admin`,httpOptons);
  }
  deleteUser(data:any){
    console.log(data)
    return this.http.post<any>(`${this.apiurl}admin/deleteUser`,data,httpOptons)
  }
  searchUser(data:any){
    return this.http.get<any>(`${this.apiurl}admin/doUserSearch?name=${data}`,httpOptons)
  }
}
