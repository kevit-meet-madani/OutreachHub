import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard/dashboard.component';
import { DataComponent } from './dashboard/data/data.component';
import { LoginComponent } from './auth/login/login.component';
import { CreateworkspaceComponent } from './createworkspace/createworkspace.component';

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
        path:'create',
        component:CreateworkspaceComponent
      }
    ]
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
