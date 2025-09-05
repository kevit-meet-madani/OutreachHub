import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Template } from './data';
import { response } from 'express';

@Injectable({
  providedIn: 'root'
})

export class TemplatesService {

  constructor(private http:HttpClient) { }

  url = 'http://localhost:5000/messages'

  getTemplates():Observable<Template[]>{

    const token = localStorage.getItem('token');
    const headers = {
      'Authorization':`Bearer ${token}`
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

  getPermisson():boolean{
       return false;
  }
}
