import { Component } from '@angular/core';
import { Campaign } from './data';
import { CampaignService } from '../campaign.service';
import { ContactService } from '../../contacts/contact.service';

@Component({
  selector: 'app-campaigns',
  templateUrl: './campaigns.component.html',
  styleUrl: './campaigns.component.scss'
})
export class CampaignsComponent {

  constructor(private campsService:CampaignService,private contactService:ContactService) {}
     campaigns: Campaign[] = [];

     user!:string[]
     currentpage = 1
     limit = 5
     totalPages = 0;
    getpermisson():string[]{
      return this.campsService.getPermisson();
    }

  ngOnInit() {
    // replace with API call
    this.getCampaigns(1);
    this.user = this.getpermisson()
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

  getCampaigns(page:number){
    this.campsService.getCampaigns(page,this.limit,localStorage.getItem('workspace')!).subscribe( camps=> {
      this.campaigns = camps.data
      this.totalPages = camps.totalPages
    })
  }

  deleteCampaign(id:any){
     this.campsService.deleteCampaign(id).subscribe({
      next: (response) => {
        this.getCampaigns(this.currentpage);
      },

      error: (error) => {
        console.log(error);
      }
     });
  }

  async OnLaunch(camp:Campaign){
    const res = await this.campsService.launchCampMess(camp);
    
    if(res !== "error"){
      this.campsService.changeStatus(camp._id).subscribe({  
        next: (response) => {
          console.log(response);
        },
        error: (error) => {
          console.log(error);
        }
      });
      camp.status = "Running";
      console.log(camp._id);

      setTimeout(() => {
        camp.status = "Completed";
      },5000);
    }
    else{
      alert("No contacts found with the specified tags.");
    }
    camp.tags.pop();
  }

  duplicate(camp: Campaign) {
  const { _id, workspaceId, ...obj } = camp; 

  
  const newCamp = { 
    ...obj, 
    workspaceId: localStorage.getItem('workspace')! 
  };
  console.log(newCamp); 

  this.campsService.createCampaign(newCamp); 

  this.getCampaigns(this.currentpage); 
}


  prevpage(){
    if(this.currentpage > 1){
      this.currentpage--;
      this.getCampaigns(this.currentpage);
    }
  }

  nextpage(){
    if(this.currentpage < this.totalPages){
      this.currentpage++;
      this.getCampaigns(this.currentpage);
    }
  }
}
