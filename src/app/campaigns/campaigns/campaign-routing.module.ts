import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CampaignsComponent } from './campaigns.component';
import { CreatecampaignComponent } from '../createcampaign/createcampaign.component';
import { ViewcampaignComponent } from '../viewcampaign/viewcampaign.component';
import { EditcampaignComponent } from '../editcampaign/editcampaign.component';
import { authGuard } from '../../auth.guard';

const routes: Routes = [
  {
    path:'',
    component:CampaignsComponent,
    canActivate:[authGuard]
  },
  {
    path:'create',
    component:CreatecampaignComponent,
    canActivate:[authGuard]
  },
  {
    path:'view/:id',
    component:ViewcampaignComponent,
    canActivate:[authGuard]
  },
  {
    path:'edit/:id',
    component:EditcampaignComponent,
    canActivate:[authGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CampaignRoutingModule { }
