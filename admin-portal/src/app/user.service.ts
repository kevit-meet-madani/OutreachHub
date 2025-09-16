import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './user';

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

  getToggledUsers(id:any):Observable<any[]>{
    const token = localStorage.getItem('token');
       const headers = {
         'Authorization':`Bearer ${token}`
       }

      return this.http.get<any[]>(`${this.url}/toggled/${id}`,{ headers});
  }

  createUser(body:User){
    const token = localStorage.getItem('token');
       const headers = {
         'Authorization':`Bearer ${token}`
       }
       this.http.post<User>(`${this.url}`,body,{ headers }).subscribe({
        next: (response) => {
          console.log(response);
        },

        error: (error) => {
          console.log(error);
        }
       });
  }

  deleteUser(id:string){
    const token = localStorage.getItem('token');
       const headers = {
         'Authorization':`Bearer ${token}`
       }

    this.http.delete(`${this.url}/${id}`,{ headers })
  }

  updateUser(body:User){
    const token = localStorage.getItem('token');
       const headers = {
         'Authorization':`Bearer ${token}`
       }

       return this.http.patch(`${this.url}/${body._id}`,body,{ headers })
  }

  updateWorkspaceUsers(id:any,body:any){
       const token = localStorage.getItem('token');
       const headers = {
         'Authorization':`Bearer ${token}`
       }

       return this.http.patch(`${this.url}/addworks/${id}`,{array:body},{ headers});
  }
}
