import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CampaignsComponent } from './campaigns.component';
import { CreatecampaignComponent } from '../createcampaign/createcampaign.component';
import { ViewcampaignComponent } from '../viewcampaign/viewcampaign.component';
import { EditcampaignComponent } from '../editcampaign/editcampaign.component';

const routes: Routes = [
  {
    path:'',
    component:CampaignsComponent
  },
  {
    path:'create',
    component:CreatecampaignComponent
  },
  {
    path:'view/:id',
    component:ViewcampaignComponent
  },
  {
    path:'edit/:id',
    component:EditcampaignComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CampaignRoutingModule { }
