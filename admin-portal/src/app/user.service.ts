import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }

  url = 'http://localhost:5000/users'

  getUsers(id:any):Observable<any[]>{
     const token = localStorage.getItem('token');
       const headers = {
         'Authorization':`Bearer ${token}`
       }

     return this.http.get<any[]>(`${this.url}/works/${id}`,{ headers });
  }
}
