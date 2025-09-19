import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddcontactComponent } from '../addcontact/addcontact.component';
import { ContactsComponent } from './contacts.component';
import { EditcontactComponent } from '../editcontact/editcontact.component';
import { ViewcontactComponent } from '../viewcontact/viewcontact.component';
import { authGuard } from '../../auth.guard';

const routes: Routes = [
  {
    path:'',
    component:ContactsComponent,
    canActivate:[authGuard]
  },
  {
    path:'create',
    component:AddcontactComponent,
    canActivate:[authGuard]
  },
  {
    path:'edit/:id',
    component:EditcontactComponent,
    canActivate:[authGuard]
  },
  {
     path:'view/:id',
     component:ViewcontactComponent,
     canActivate:[authGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContactsRoutingModule { }
