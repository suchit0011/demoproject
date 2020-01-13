import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {path:'login',loadChildren:'src/app/login-module/login-module.module#LoginModuleModule'},
  {path:'',loadChildren:'src/app/home/home.module#HomeModule'},
  {path:'userdata',loadChildren:'src/app/home-dummy/home-dummy.module#HomeDummyModule'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
