import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TemplatesComponent } from './templates.component';
import { CreatetemplateComponent } from '../createtemplate/createtemplate.component';

const routes: Routes = [
  {
    path:'',
    component:TemplatesComponent
  },
  {
    path:'create',
    component:CreatetemplateComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TemplatesRoutingModule { }
