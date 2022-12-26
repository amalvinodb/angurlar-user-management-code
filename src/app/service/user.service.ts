/* eslint-disable @typescript-eslint/no-explicit-any */
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable,map,catchError,of } from 'rxjs';


const httpOptons = {
  headers: new HttpHeaders({
    'content-type': 'application/json',
  }),
};
@Injectable({
  providedIn: 'root',
})
export class UserService {
  private apiurl = 'http://localhost:3000/';
  constructor(private http: HttpClient) {}
  addUser(user: any): Observable<any> {
    console.log('services', user);
    return this.http.post<any>(
      `${this.apiurl}userSignUp`,
      JSON.stringify(user),
      httpOptons
    );
  }
  dologin(user: any): Observable<any> {
    console.log(user)
    return this.http.post<any>(
      `${this.apiurl}userLogin`,
      JSON.stringify(user),
      httpOptons
    )
  }
}
