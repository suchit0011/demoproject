import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataTablesModule } from 'angular-datatables'
import { HomeDummyRoutingModule } from './home-dummy-routing.module';
import { HomedummyComponent } from './homedummy/homedummy.component';


@NgModule({
  declarations: [HomedummyComponent],
  imports: [
    CommonModule,
    HomeDummyRoutingModule,
    DataTablesModule
  ]
})
export class HomeDummyModule { }
