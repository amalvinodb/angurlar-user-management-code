/* eslint-disable @typescript-eslint/no-explicit-any */
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
const httpOptons = {
  headers: new HttpHeaders({
    'content-type': 'application/json',
    // 'Content-Type': 'multipart/form-data',
    autharization: localStorage.getItem('userTocken') || ' ',
  }),
};

@Injectable({
  providedIn: 'root',
})
export class ManagementService {
  private apiurl = 'http://localhost:3000/';
  constructor(private http: HttpClient) {}
  editUserDetails(user: any): Observable<any> {
    return this.http.post<any>(
      `${this.apiurl}user/editUser`,
      JSON.stringify(user),
      httpOptons
    );
  }
  uploadImage(data: FormData) {
    const Optons = {
      headers: new HttpHeaders({
        // 'content-type': 'application/json',
        // 'Content-Type': 'multipart/form-data',
        autharization: localStorage.getItem('userTocken') || ' ',
      }),
    };
    console.log("submitting image")
    return this.http.post<any>(
      `${this.apiurl}user/uploadImage`,
      data,
      Optons
    );
  }
}
