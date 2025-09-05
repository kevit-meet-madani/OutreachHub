import { Component } from '@angular/core';
import { TemplatesService } from '../../templates/templates.service';
import { Template } from '../../templates/data';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-createcampaign',
  templateUrl: './createcampaign.component.html',
  styleUrl: './createcampaign.component.scss'
})
export class CreatecampaignComponent {

  constructor(private templateService:TemplatesService) {}

  addform!:FormGroup

    templates:Template[] = []

    selectedTemplate!:Template
    ngOnInit(){

      this.addform = new FormGroup({
        
      })
      this.getTemplates();
    }

    submitCampaign(){
      
    }

    getTemplates(){
      this.templateService.getTemplates().subscribe(tems => {
        this.templates = tems;
      })
    }
}
