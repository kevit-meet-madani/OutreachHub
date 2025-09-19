import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { DashboardComponent } from './dashboard/dashboard/dashboard.component';
import { DataComponent } from './dashboard/data/data.component';
import { CampaignsComponent } from './campaigns/campaigns/campaigns.component';
import { authGuard } from './auth.guard';


const routes: Routes = [
  {
    path:'',
    component:LoginComponent
  },
  {
    path:'dashboard',
    component:DashboardComponent,
    canActivate:[authGuard],
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
        loadChildren: () => import('./campaigns/campaigns/campaign.module').then(m => m.CampaignModule)
      },
      {
        path:'templates',
        loadChildren: () => import('./templates/templates/templates.module').then(m => m.TemplatesModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
