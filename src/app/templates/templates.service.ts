import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Template } from './data';

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

  getPermisson():boolean{
       return false;
  }
}
