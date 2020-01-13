import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import {ServiceapiService} from 'src/app/_service/serviceapi.service';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private apiservice : ServiceapiService,private router: Router) { }
  canActivate(){
    if(this.apiservice.authUser()){
      
      return true;
    }else{
      this.router.navigate(['login']);
      return false;
    }
    

  }
    
}
