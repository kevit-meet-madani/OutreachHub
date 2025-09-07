import { Component, Output } from '@angular/core';
import { Workspace } from '../data';
import { AuthService } from '../../auth.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrl: './data.component.scss'
})
export class DataComponent {

    constructor(private authService:AuthService,private http:HttpClient) {}

    workspaces:Workspace[]=[]

    url = 'http://localhost:5000/workspaces'
    
    ngOnInit(){

       const token = localStorage.getItem('token');
       const headers = {
         'Authorization':`Bearer ${token}`
       }
       alert(token);
       this.http.get<Workspace[]>(this.url,{ headers }).subscribe(works => {
        this.workspaces = works
       })
    }
   
    
}
