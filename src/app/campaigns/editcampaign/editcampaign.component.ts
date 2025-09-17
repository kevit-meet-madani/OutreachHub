import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CampaignService } from '../campaign.service';
import { ActivatedRoute } from '@angular/router';
import { TemplatesService } from '../../templates/templates.service';
import { Template } from '../../templates/data';

@Component({
  selector: 'app-editcampaign',
  templateUrl: './editcampaign.component.html',
  styleUrl: './editcampaign.component.scss'
})
export class EditcampaignComponent {
     constructor(private campaignService:CampaignService,private route:ActivatedRoute,private templateService:TemplatesService) {}
     
       editform!:FormGroup
       templates:Template[] = []
       selectedTemplate!:Template
     
         ngOnInit(){
     
           this.editform = new FormGroup({
               createdAt:new FormControl(''),
               name:new FormControl('',Validators.required),
               tags:new FormControl([''],Validators.required),
               content:new FormControl('',Validators.required),
               templateId:new FormControl('')
           })
           this.getTemplates();
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
     
       getTemplates(){
      this.templateService.getTemplates(localStorage.getItem('workspace')!).subscribe(tems => {
        this.templates = tems;
      })
    }
     
}
