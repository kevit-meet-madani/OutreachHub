import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Workspace } from './dashboard/data';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WorkspaceService {

  constructor(private http:HttpClient) { }

  url = 'http://localhost:5000/workspaces'

  

  getWorkspaces():Observable<Workspace[]>{
    const token = localStorage.getItem('token');
       const headers = {
         'Authorization':`Bearer ${token}`
       }
       alert(token);
       return this.http.get<Workspace[]>(this.url,{ headers })
  }

  createWorkspace(body:Workspace){
    const token = localStorage.getItem('token');
       const headers = {
         'Authorization':`Bearer ${token}`
       }

       this.http.post<Workspace>(this.url,body,{ headers }).subscribe({
        next: (response)  => {
          console.log("workspace created");
        },

        error: (error) => {
          console.log(error);
        }
       })
  }

  

  deleteWorkspace(id:any){

    const token = localStorage.getItem('token');
       const headers = {
         'Authorization':`Bearer ${token}`
       }
    this.http.delete(`${this.url}/${id}`,{ headers }).subscribe({
      next: (response) => {
        console.log(response);
      },

      error: (error) => {
        console.log(error);
      }
    })


  }
}
