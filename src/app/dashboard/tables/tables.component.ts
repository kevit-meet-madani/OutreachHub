import { Component } from '@angular/core';
import { Contact } from '../../contacts/data';
import { ContactService } from '../../contacts/contact.service';
import { CampaignService } from '../../campaigns/campaign.service';
import { SharedService } from '../../shared.service';

@Component({
  selector: 'app-tables',
  templateUrl: './tables.component.html',
  styleUrl: './tables.component.scss'
})
export class TablesComponent {

    constructor(private contactService:ContactService,private campservice:CampaignService,private sharedService:SharedService) {}
    
    recentCampaigns:any[] = [];
    

     topTags:any[] = [];

  ngOnInit(){
    this.sharedService.event$.subscribe(res => {
      this.call();
    })
  }

  call(){
     this.contactService.getTopTags(localStorage.getItem('workspace')!).subscribe(res => {
      this.topTags = res;
      console.log(res);
    });

    this.campservice.getRecentCampaigns(localStorage.getItem('workspace')!).subscribe(res => {
      this.recentCampaigns = res;
    })
  }
}
