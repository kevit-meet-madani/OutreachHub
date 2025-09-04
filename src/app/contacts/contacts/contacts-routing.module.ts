import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddcontactComponent } from '../addcontact/addcontact.component';
import { ContactsComponent } from './contacts.component';
import { EditcontactComponent } from '../editcontact/editcontact.component';
import { ViewcontactComponent } from '../viewcontact/viewcontact.component';

const routes: Routes = [
  {
    path:'',
    component:ContactsComponent
  },
  {
    path:'create',
    component:AddcontactComponent
  },
  {
    path:'edit/:id',
    component:EditcontactComponent
  },
  {
     path:'view/:id',
     component:ViewcontactComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContactsRoutingModule { }
