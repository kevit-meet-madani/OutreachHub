import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CampaignService } from '../campaign.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-editcampaign',
  templateUrl: './editcampaign.component.html',
  styleUrl: './editcampaign.component.scss'
})
export class EditcampaignComponent {
     constructor(private campaignService:CampaignService,private route:ActivatedRoute) {}
     
       editform!:FormGroup
     
         ngOnInit(){
     
           this.editform = new FormGroup({
               createdAt:new FormControl(''),
               name:new FormControl('',Validators.required),
               tags:new FormControl([''],Validators.required),
               content:new FormControl('',Validators.required)
           })
         }
     
         submitCampaign(){
           const tags = this.editform.value.tags.split(' ');
           
           const obj = this.editform.value;
           const id = this.route.snapshot.paramMap.get('id');
           obj["_id"] = id;
           obj["tags"] = tags;
           obj["status"] = "Draft";
     
           console.log(obj);
           this.campaignService.updateCampaign(obj);
         }
    
     
}
