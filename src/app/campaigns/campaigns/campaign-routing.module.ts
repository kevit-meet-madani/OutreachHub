import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CampaignsComponent } from './campaigns.component';
import { CreatecampaignComponent } from '../createcampaign/createcampaign.component';

const routes: Routes = [
  {
    path:'',
    component:CampaignsComponent
  },
  {
    path:'create',
    component:CreatecampaignComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CampaignRoutingModule { }
