import { Component } from '@angular/core';
import { CampaignService } from '../campaign.service';
import { ActivatedRoute, Route } from '@angular/router';
import { Campaign } from '../campaigns/data';

@Component({
  selector: 'app-viewcampaign',
  templateUrl: './viewcampaign.component.html',
  styleUrl: './viewcampaign.component.scss'
})
export class ViewcampaignComponent {

    constructor(private campaignService:CampaignService,private route:ActivatedRoute) {}

    contacts:any[] = []
    campaign!:Campaign
    cp = 1
    ngOnInit(){
      this.getTemplate();
    }

    getTemplate(){
      const id = this.route.snapshot.paramMap.get('id');
      this.campaignService.getCampaign(id).subscribe({
        next: (response) => {
          this.campaign = response
          this.getContacts(this.campaign);
        },
        error: (error) => {
          console.log(error);
        }
      });
    }

    getContacts(campaign:Campaign){
      this.campaignService.getContactsByTags(campaign.tags).subscribe({
        next: (response) => {
          console.log(response);
          this.contacts = response;
        },

        error: (error) => {
          console.log(error);
        }
      })
    }
}
