import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Contact } from './data';
import { Observable } from 'rxjs';
import { AuthService } from '../auth.service';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor(private http:HttpClient,private authService:AuthService) { }

  url = 'http://localhost:5000/contacts'

  getContacts():Observable<Contact[]>{
     
    const token = localStorage.getItem('token');
    const id = localStorage.getItem('workspace');
    const wid=localStorage.getItem('workspace')
    const headers = {
      'Authorization':`Bearer ${token} ${id}`,
    }
    return this.http.get<Contact[]>(this.url,{ headers });
  }

  createContact(contact:Contact){
    const token = localStorage.getItem('token');
    const wid = localStorage.getItem('workspace')!;
    contact["workspace"] = wid;
    const headers = {
      'Authorization':`Bearer ${token}`
    }
     
      this.http.post<Contact>(this.url,contact,{ headers }).subscribe({
        next: (response) => {
          console.log(response);
        },

        error: (error) => {
          console.log(error);
        }
      });
  }

  editContact(contact:any){
    const token = localStorage.getItem('token');
    const headers = {
      'Authorization':`Bearer ${token}`
    }
    
    this.http.patch<Contact>(`${this.url}/${contact.id}`,contact,{ headers }).subscribe({
      next: (response) => {
        console.log(response);
      },

      error: (error) => {
        console.log(error);
      }
    })
  }

  getContact(id:any):Observable<Contact>{

    const token = localStorage.getItem('token');
    const headers = {
      'Authorization':`Bearer ${token}`
    }
      return this.http.get<Contact>(`${this.url}/${id}`,{ headers });
  }

  deleteContact(id:any){

    const token = localStorage.getItem('token');
    const headers = {
      'Authorization':`Bearer ${token}`
    }

    this.http.delete(`${this.url}/${id}`,{ headers }).subscribe({
      next: (response) => {
        if(response){
          console.log("Data deleted");
        }
      },

      error: (error) => {
        console.log(error)
      }
    })
  }

  async getContactsByTag(tag:string[]):Observable<any[]>{
    const token = localStorage.getItem('token');
    const headers = {
      'Authorization':`Bearer ${token}`
    }

    return await this.http.get<any[]>(`{this.url}/tags/${tag}`,{ headers })
  }

  getPermisson():string[]{
     const res = this.authService.getUserInfo()?.split(' ')!;
     return res;
  }
}
