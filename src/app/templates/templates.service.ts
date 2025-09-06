import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Template } from './data';
import { response } from 'express';
import { UpdateTemplate } from './updatedata';

@Injectable({
  providedIn: 'root'
})

export class TemplatesService {

  constructor(private http:HttpClient) { }

  url = 'http://localhost:5000/messages'

  getTemplates():Observable<Template[]>{

    const token = localStorage.getItem('token');
    const wid = localStorage.getItem('workspace');
    const headers = {
      'Authorization':`Bearer ${token} ${wid}`
    }

    return this.http.get<Template[]>(this.url,{ headers });
  }

  createTemplate(template:Template){
     const token = localStorage.getItem('token');
     const headers = {
      'Authorization':`Bearer ${token}`
     }
    //  console.log(template);

     
     this.http.post<Template>(this.url,template,{ headers }).subscribe({
      next: (response) => {
        console.log(response);
      },

      error: (error) => {
        console.log(error);
      }
     })
  }

  updateTemplate(template:UpdateTemplate){
    const token = localStorage.getItem('token');
     const headers = {
      'Authorization':`Bearer ${token}`
     }

     this.http.patch<UpdateTemplate>(`${this.url}/${template.id}`,template,{ headers }).subscribe({
      next: (response) => {
        console.log(response);
      },
      error: (error) => {
        console.log(error);
      }
     });
  }

  getTemplate(id:any): Observable<Template>{
    const token = localStorage.getItem('token');
     const headers = {
      'Authorization':`Bearer ${token}`
     }

     return this.http.get<Template>(`${this.url}/${id}`,{ headers })
  }

  getPermisson():boolean{
      return false;
  }

  deleteTemplate(id:any){
    const token = localStorage.getItem('token');
     const headers = {
      'Authorization':`Bearer ${token}`
     }

     this.http.delete(`${this.url}/${id}`, { headers }).subscribe({
      next: (response) => {
        console.log("data deleted");
      },

      error:(error) => {
        console.log(error);
      }
     })
  }
}
