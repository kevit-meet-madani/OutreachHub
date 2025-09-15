import { Component } from '@angular/core';
import { TemplatesService } from '../../templates/templates.service';
import { Template } from '../../templates/data';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CampaignService } from '../campaign.service';

@Component({
  selector: 'app-createcampaign',
  templateUrl: './createcampaign.component.html',
  styleUrl: './createcampaign.component.scss'
})
export class CreatecampaignComponent {

  constructor(private campaignService:CampaignService,private templateService:TemplatesService) {}

  addform!:FormGroup

    templates:Template[] = []

    selectedTemplate!:Template
    ngOnInit(){

      this.addform = new FormGroup({
          templateId:new FormControl(''),
          createdAt:new FormControl(''),
          name:new FormControl('',Validators.required),
          tags:new FormControl([''],Validators.required),
          content:new FormControl('',Validators.required)
      })
      this.getTemplates();
    }

    submitCampaign(){
      const tags = this.addform.value.tags.split(' ');
      
      const obj = this.addform.value;
      obj["tags"] = tags;
      obj["workspaceId"] = localStorage.getItem('workspace');
      obj["status"] = "Draft";

      console.log(obj);
      this.campaignService.createCampaign(obj);
    }

    getTemplates(){
      this.templateService.getTemplates(localStorage.getItem('workspace')!).subscribe(tems => {
        this.templates = tems;
      })
    }

}
