import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard/dashboard.component';
import { NavbarComponent } from './dashboard/navbar/navbar.component';
import { Router, RouterModule } from '@angular/router';
import { FooterComponent } from './dashboard/footer/footer.component';
import { HttpClientModule, provideHttpClient, withFetch } from '@angular/common/http';
import { DataComponent } from './dashboard/data/data.component';
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './auth/login/login.component';
import { CreateworkspaceComponent } from './createworkspace/createworkspace.component';
import { WorkspaceUpdateComponent } from './editworkspace/editworkspace.component';
import { UserlistComponent } from './userlist/userlist.component';
import { CreateuserComponent } from './createuser/createuser.component';
import { VieworkspaceComponent } from './vieworkspace/vieworkspace.component';
import { EdituserComponent } from './edituser/edituser.component';



@NgModule({
  declarations: [
    LoginComponent,
    AppComponent,
    DashboardComponent,
    NavbarComponent,
    FooterComponent,
    DataComponent,
    CreateworkspaceComponent,
    WorkspaceUpdateComponent,
    UserlistComponent,
    CreateuserComponent,
    VieworkspaceComponent,
    EdituserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    provideClientHydration(),
    provideHttpClient(withFetch())
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
