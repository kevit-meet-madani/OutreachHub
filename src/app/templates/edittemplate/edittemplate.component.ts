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
      const obj = this.editform.value;
      obj["id"] = id;
      this.templateService.updateTemplate(obj);
   }

   onImageSelected(){

   }
}
