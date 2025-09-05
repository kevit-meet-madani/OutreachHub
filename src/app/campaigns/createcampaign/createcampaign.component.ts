import { Component } from '@angular/core';
import { TemplatesService } from '../../templates/templates.service';
import { Template } from '../../templates/data';
import { FormControl, FormGroup, Validators } from '@angular/forms';

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
          template:new FormControl(''),
          createdAt:new FormControl(' '),
          name:new FormControl('',Validators.required),
          tags:new FormControl(' ',Validators.required)
      })
      this.getTemplates();
    }

    submitCampaign(){
      console.log(this.addform.value.tags.split(' '));
    }

    getTemplates(){
      this.templateService.getTemplates().subscribe(tems => {
        this.templates = tems;
      })
    }

}
