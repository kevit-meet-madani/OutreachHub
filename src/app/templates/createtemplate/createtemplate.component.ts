import { Component } from '@angular/core';
import { Template } from '../data';
import { TemplatesService } from '../templates.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-createtemplate',
  templateUrl: './createtemplate.component.html',
  styleUrl: './createtemplate.component.scss'
})
export class CreatetemplateComponent {

  constructor(private templateService:TemplatesService,private router:Router) {}

  template!:Template

  previewImage: string | ArrayBuffer | null = null;

  addform!:FormGroup
  
     ngOnInit(){
        this.addform = new FormGroup({
          name:new FormControl('',[Validators.required]),
          type: new FormControl('',[Validators.required]),
          text:new FormControl('',[Validators.required]),
          imagePath:new FormControl('',[]),
        })
     }

  OnSubmit(){

    const obj = {
      name:this.addform.value.name,
      type:this.addform.value.type,
      workspaceId:localStorage.getItem('workspace')!,
      content:{
        text:this.addform.value.text,
        imagePath:this.addform.value.imagePath
      }
    }
     this.templateService.createTemplate(obj);
     this.router.navigate(['/dashboard/templates']);
    // console.log(this.addform.value);
  }

  onImageSelected(){

  }

  OnCancel(){

  }
}
