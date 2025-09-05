import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TemplatesComponent } from './templates.component';
import { CreatetemplateComponent } from '../createtemplate/createtemplate.component';
import { EdittemplateComponent } from '../edittemplate/edittemplate.component';
import { ViewtemplateComponent } from '../viewtemplate/viewtemplate.component';

const routes: Routes = [
  {
    path:'',
    component:TemplatesComponent
  },
  {
    path:'create',
    component:CreatetemplateComponent
  },
  {
    path:'edit/:id',
    component:EdittemplateComponent
  },
  {
    path:'view/:id',
    component:ViewtemplateComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TemplatesRoutingModule { }
