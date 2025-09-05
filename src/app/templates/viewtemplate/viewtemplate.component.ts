import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TemplatesService } from '../templates.service';
import { Template } from '../data';

@Component({
  selector: 'app-viewtemplate',
  templateUrl: './viewtemplate.component.html',
  styleUrl: './viewtemplate.component.scss'
})
export class ViewtemplateComponent {
    templateId!: string;

  template!: Template;

  constructor(private route: ActivatedRoute,private templateService:TemplatesService) {}

  ngOnInit(): void {
    this.getTemplate();
  }

  getTemplate(){
    const id = this.route.snapshot.paramMap.get('id');
     this.templateService.getTemplate(id).subscribe({
      next: (response) => {
        this.template = response
      },

      error: (error) => {
        console.log(error);
      }
     });
  }
}
