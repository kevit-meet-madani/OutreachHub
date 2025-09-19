import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TemplatesComponent } from './templates.component';
import { CreatetemplateComponent } from '../createtemplate/createtemplate.component';
import { EdittemplateComponent } from '../edittemplate/edittemplate.component';
import { ViewtemplateComponent } from '../viewtemplate/viewtemplate.component';
import { authGuard } from '../../auth.guard';

const routes: Routes = [
  {
    path:'',
    component:TemplatesComponent,
    canActivate:[authGuard]
  },
  {
    path:'create',
    component:CreatetemplateComponent,
    canActivate:[authGuard]
  },
  {
    path:'edit/:id',
    component:EdittemplateComponent,
    canActivate:[authGuard]
  },
  {
    path:'view/:id',
    component:ViewtemplateComponent,
    canActivate:[authGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TemplatesRoutingModule { }
