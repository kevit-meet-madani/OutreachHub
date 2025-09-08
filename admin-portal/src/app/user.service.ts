import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }

  url = 'http://localhost:5000/users'

  deleteWorkspaces(id:any){
     
  }
}
