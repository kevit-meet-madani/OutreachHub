import { Component } from '@angular/core';
import { Campaign } from './data';
import { CampaignService } from '../campaign.service';

@Component({
  selector: 'app-campaigns',
  templateUrl: './campaigns.component.html',
  styleUrl: './campaigns.component.scss'
})
export class CampaignsComponent {

  constructor(private campsService:CampaignService) {}
     campaigns: Campaign[] = [];

     user!:string[]
    getpermisson():string[]{
      return this.campsService.getPermisson();
    }

  ngOnInit() {
    // replace with API call
    this.getCampaigns();
    this.user = this.getpermisson();
  }

  call(id:any):boolean{
      return (this.user[1] !== id && this.user[0] !== "edit"); 
    }

  getStatusClass(status: string): string {
    return {
      draft: 'badge-draft',
      running: 'badge-running',
      completed: 'badge-completed'
    }[status] || 'Draft';
  }

  getCampaigns(){
    this.campsService.getCampaigns().subscribe( camps=> {
      this.campaigns = camps
    })
  }

  deleteCampaign(id:any){
     this.campsService.deleteCampaign(id);
  }
}
