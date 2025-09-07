import { Component } from '@angular/core';
import { Template } from '../data';
import { TemplatesService } from '../templates.service';

@Component({
  selector: 'app-templates',
  templateUrl: './templates.component.html',
  styleUrl: './templates.component.scss'
})
export class TemplatesComponent {

     constructor(private templateService:TemplatesService) {}

      templates:Template[] = []

      textTypes:Template[] = []
      imageTypes:Template[] = []
      user!:string[]
    getpermisson():string[]{
      return this.templateService.getPermisson();
    }

      ngOnInit(){
        this.getTemplates();
        this.user = this.getpermisson();
        console.log(this.templates)
      }

      call(id:any):boolean{
      return (this.user[1] !== id && this.user[0] !== "edit"); 
    }

      getTemplates(){
         this.templateService.getTemplates().subscribe(tems => {
            this.templates = tems;
             this.textTypes = this.templates.filter(t => t.type === "text");
             this.imageTypes = this.templates.filter(t => t.type !== "text");
         })
      }

      delete(id:any){
         this.templateService.deleteTemplate(id);
      }
}
