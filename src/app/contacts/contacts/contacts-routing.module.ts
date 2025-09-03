import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddcontactComponent } from '../addcontact/addcontact.component';
import { ContactsComponent } from './contacts.component';

const routes: Routes = [
  {
    path:'',
    component:ContactsComponent
  },
  {
    path:'create',
    component:AddcontactComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContactsRoutingModule { }
