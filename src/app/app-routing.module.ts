import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { DashboardComponent } from './dashboard/dashboard/dashboard.component';
import { DataComponent } from './dashboard/data/data.component';
import { ContactsComponent } from './contacts/contacts/contacts.component';
import { CampaignsComponent } from './campaigns/campaigns/campaigns.component';
import { TemplatesComponent } from './templates/templates/templates.component';

const routes: Routes = [
  {
    path:'',
    component:LoginComponent
  },
  {
    path:'dashboard',
    component:DashboardComponent,
    children:[
      {
        path:'',
        component:DataComponent
      },
      {
        path:'contacts',
        loadChildren: () => import('./contacts/contacts/contacts.module').then(m => m.ContactsModule)
      },
      {
        path:'campaigns',
        component:CampaignsComponent
      },
      {
        path:'templates',
        component:TemplatesComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
