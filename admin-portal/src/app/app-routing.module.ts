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
import { ExistuserComponent } from './existuser/existuser.component';
import { authGuard } from './auth.guard';
import { ViewuserComponent } from './viewuser/viewuser.component';


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
        path:':id/view',
        component:VieworkspaceComponent,
        canActivate:[authGuard],
      },
      {
        path:':id/edit',
        component:WorkspaceUpdateComponent,
        canActivate:[authGuard],
      },
      {
        path:':id/create',
        component:CreateworkspaceComponent,
        canActivate:[authGuard],
      },
      {
        path:':id/users',
        component:UserlistComponent,
        canActivate:[authGuard],
      },
      {
        path:':id/users/create',
       component:CreateuserComponent,
       canActivate:[authGuard],
      },
      {
        path:':id/users/exist',
       component:ExistuserComponent,
       canActivate:[authGuard],
      },
      {
         path:':id/users/:userId/edit',
        component:EdituserComponent,
        canActivate:[authGuard],
      },
      {
        path:':id/users/:userId/view',
        component:ViewuserComponent,
        canActivate:[authGuard],
      }
    ]
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
