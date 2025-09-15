import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { TemplatesService } from '../templates.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edittemplate',
  templateUrl: './edittemplate.component.html',
  styleUrl: './edittemplate.component.scss'
})
export class EdittemplateComponent {

  constructor(private templateService:TemplatesService,private route:ActivatedRoute) {}

  imagePreview: string | ArrayBuffer | null = null;
  types = ['text', 'text and image'];

  ngOnInit(){
    this.editform = new FormGroup({
      name:new FormControl('',[Validators.required]),
      type:new FormControl('',[Validators.required]),
      text:new FormControl('',[Validators.required]),
      imagePath:new FormControl(''),
    })
  }

   editform!:FormGroup

   OnSubmit(){

      const id = this.route.snapshot.paramMap.get('id');
      const obj = {
      id:id,
      name:this.editform.value.name,
      type:this.editform.value.type,
      workspaceId:localStorage.getItem('workspace')!,
      content:{
        text:this.editform.value.text,
        imagePath:this.editform.value.imagePath
      }
    }
      console.log(obj);
      this.templateService.updateTemplate(obj);
   }

   onImageSelected(){

   }
}
