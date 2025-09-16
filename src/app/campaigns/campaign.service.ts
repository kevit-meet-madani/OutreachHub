import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Campaign, CampMess, CampPaginatedResponse } from './campaigns/data';
import { Observable } from 'rxjs';
import { AuthService } from '../auth.service';
import { ContactService } from '../contacts/contact.service';
import { firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CampaignService {

  constructor(private http:HttpClient,private authService:AuthService,private contactService:ContactService) { }

  url = 'http://localhost:5000/campaigns'
  url2 = 'http://localhost:5000/campmess';

  getCampaigns(page:number,limit:number,id:string):Observable<CampPaginatedResponse>{
    const token = localStorage.getItem('token');
    const headers = {
      'Authorization':`Bearer ${token}`
    }
    return this.http.get<CampPaginatedResponse>(`${this.url}/camps/${id}?page=${page}&limit=${limit}`,{ headers })
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

    return this.http.delete(`${this.url}/${id}`,{ headers })
  }

  getPermisson():string[]{
     const res = this.authService.getUserInfo()?.split(' ')!;
     return res;
  }

async launchCampMess(campaign: Campaign): Promise<string> {
  const token = localStorage.getItem('token');
  const headers = {
    "Authorization": `bearer ${token}`
  };

  try {
    const contacts = await firstValueFrom(this.getContactsByTags(campaign.tags));
    if (contacts.length === 0) {
      return "error";
    }

    const obj = {
      campaignId: campaign._id,
      workspaceId: localStorage.getItem('workspace')!,
      templateData: campaign.templateId,
      tags: campaign.tags,
      contacts: contacts
    };

    await firstValueFrom(this.http.post<CampMess>(this.url2, obj, { headers }));
    return "success";
  } catch (error) {
    console.log(error);
    return "error";
  }
}

  getContactsByTags(tags:string[]){
     return this.contactService.getContactsByTag(tags);
  }

  getRecentCampaigns(id:string){
    const token = localStorage.getItem('token');
    const headers = {
      "Authorization":`bearer ${token}`
    }

     return this.http.get<any[]>(`${this.url}/recent/${id}`, { headers })
  }

  getCampaingnChart(daterange:string):Observable<any[]>{
    const token = localStorage.getItem('token');
    const headers = {
      "Authorization":`bearer ${token}`
    }
    
     return this.http.get<any[]>(`${this.url}/chart/${daterange}`,{ headers })
  }

  getMsgTypeChart(daterange:string):Observable<any[]>{
    const token = localStorage.getItem('token');
    const headers = {
      "Authorization":`bearer ${token}`
    }

    return this.http.get<any[]>(`${this.url2}/chart1/${daterange}`,{ headers })
  }

  getContactsReachedChart(daterange:string):Observable<any[]>{
    const token = localStorage.getItem('token');
    const headers = {
      "Authorization":`bearer ${token}`
    }

    return this.http.get<any[]>(`${this.url2}/chart2/${daterange}`, { headers })
  }

  changeStatus(id:any){
    const token = localStorage.getItem('token');
    const headers = {
      "Authorization":`bearer ${token}`
    }
    return this.http.patch(`${this.url}/status/${id}`,{ status : "Completed" }, { headers });
  }
}
