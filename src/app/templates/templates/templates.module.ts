import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TemplatesRoutingModule } from './templates-routing.module';
import { TemplatesComponent } from './templates.component';
import { FormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';


@NgModule({
  declarations: [TemplatesComponent],
  imports: [
    CommonModule,
    TemplatesRoutingModule,
    FormsModule,
    NgxPaginationModule
  ]
})
export class TemplatesModule { }
