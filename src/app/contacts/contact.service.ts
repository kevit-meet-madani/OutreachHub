import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Contact } from './data';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor(private http:HttpClient) { }

  url = 'http://localhost:5000/contacts'

  getContacts():Observable<Contact[]>{
     
    const token = localStorage.getItem('token');
    const headers = {
      'Authorization':`Bearer ${token}`
    }
    return this.http.get<Contact[]>(this.url,{ headers });
  }
}
