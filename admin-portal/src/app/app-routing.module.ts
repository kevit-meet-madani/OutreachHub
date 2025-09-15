import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard/dashboard.component';
import { DataComponent } from './dashboard/data/data.component';
import { LoginComponent } from './auth/login/login.component';
import { CreateworkspaceComponent } from './createworkspace/createworkspace.component';
import { WorkspaceUpdateComponent } from './editworkspace/editworkspace.component';
import { UserlistComponent } from './userlist/userlist.component';
import { CreateuserComponent } from './createuser/createuser.component';
import { VieworkspaceComponent } from './vieworkspace/vieworkspace.component';
import { EdituserComponent } from './edituser/edituser.component';


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
      },
      {
        path:'edit/:id',
        component:WorkspaceUpdateComponent
      },
      {
        path:'users/:id',
        component:UserlistComponent
      },
      {
        path:'adduser',
        component:CreateuserComponent
      },
      {
        path:'view/:id',
        component:VieworkspaceComponent
      },
      {
        path:'edit/user/:id',
        component:EdituserComponent
      }
    ]
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
