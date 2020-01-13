import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomedummyComponent } from './homedummy/homedummy.component';
import {AuthGuard} from 'src/app/_service/auth.guard';
const routes: Routes = [
  {path:'',component:HomedummyComponent,canActivate: [AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeDummyRoutingModule { }
