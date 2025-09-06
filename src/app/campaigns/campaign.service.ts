import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Campaign } from './campaigns/data';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CampaignService {

  constructor(private http:HttpClient) { }

  url = 'http://localhost:5000/campaigns'

  getCampaigns():Observable<Campaign[]>{
    const token = localStorage.getItem('token');
    const wid = localStorage.getItem('workspace');
    const headers = {
      'Authorization':`Bearer ${token} ${wid}`
    }
    return this.http.get<Campaign[]>(this.url,{ headers })
  }

  getCampaign(id:any){
    const token = localStorage.getItem('token');
    const headers = {
      'Authorization':`Bearer ${token}`
    }

    return this.http.get<Campaign>(`${this.url}/${id}`,{ headers })
  }

  createCampaign(campaign:Campaign){
    const token = localStorage.getItem('token');
    const headers = {
      "Authorization":`Bearer ${token}`
    }

    this.http.post<Campaign>(this.url,campaign,{ headers }).subscribe({
      next:(response) => {
        console.log(response);
      },
      error: (error) => {
        console.log(error);
      }
    })
  }

  updateCampaign(campaign:Campaign){
    const token = localStorage.getItem('token');
    const headers = {
      "Authorization":`bearer ${token}`
    }

    this.http.patch<Campaign>(`${this.url}/${campaign._id}`,campaign,{ headers }).subscribe({
      next: (response) => {
        console.log(response);
      },
      error: (error) => {
        console.log(error+"   !");
      }
    })
  }

  deleteCampaign(id:any){
    const token = localStorage.getItem('token');
    const headers = {
      "Authorization":`bearer ${token}`
    }

    this.http.delete(`${this.url}/${id}`,{ headers })
  }
}
