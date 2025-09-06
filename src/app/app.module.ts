import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './auth/login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DashboardComponent } from './dashboard/dashboard/dashboard.component';
import { NavbarComponent } from './dashboard/navbar/navbar.component';
import { FooterComponent } from './dashboard/footer/footer.component';
import { DataComponent } from './dashboard/data/data.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { CampaignchartComponent } from './dashboard/campaignchart/campaignchart.component';
import { BaseChartDirective, provideCharts, withDefaultRegisterables } from 'ng2-charts';
import { MessagechartComponent } from './dashboard/messagechart/messagechart.component';
import { ContactchartComponent } from './dashboard/contactchart/contactchart.component';
import { ContactsComponent } from './contacts/contacts/contacts.component';
import { TablesComponent } from './dashboard/tables/tables.component';
import { CampaignsComponent } from './campaigns/campaigns/campaigns.component';
import { TemplatesComponent } from './templates/templates/templates.component';
import { HttpClient, HttpClientModule, provideHttpClient, withFetch } from '@angular/common/http';
import { AddcontactComponent } from './contacts/addcontact/addcontact.component';
import { EditcontactComponent } from './contacts/editcontact/editcontact.component';
import { ViewcontactComponent } from './contacts/viewcontact/viewcontact.component';
import { CreatetemplateComponent } from './templates/createtemplate/createtemplate.component';
import { DropdownComponent } from './dashboard/dropdown/dropdown.component';
import { EdittemplateComponent } from './templates/edittemplate/edittemplate.component';
import { ViewtemplateComponent } from './templates/viewtemplate/viewtemplate.component';
import { CreatecampaignComponent } from './campaigns/createcampaign/createcampaign.component';
import { EditcampaignComponent } from './campaigns/editcampaign/editcampaign.component';
import { ViewcampaignComponent } from './campaigns/viewcampaign/viewcampaign.component';






@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    NavbarComponent,
    FooterComponent,
    DataComponent,
    CampaignchartComponent,
    MessagechartComponent,
    ContactchartComponent,
    TablesComponent,
    CampaignsComponent,
    AddcontactComponent,
    EditcontactComponent,
    ViewcontactComponent,
    CreatetemplateComponent,
    DropdownComponent,
    EdittemplateComponent,
    ViewtemplateComponent,
    CreatecampaignComponent,
    EditcampaignComponent,
    ViewcampaignComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BaseChartDirective,
    HttpClientModule,
    FormsModule
],
  providers: [
    provideClientHydration(),
    provideAnimationsAsync(),
    provideCharts(withDefaultRegisterables()),
    provideHttpClient(withFetch())
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
