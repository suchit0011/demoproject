import { Component, OnInit } from '@angular/core';
import {ServiceapiService} from 'src/app/_service/serviceapi.service';
import { Router } from '@angular/router';
import * as $ from 'jquery';
import 'datatables.net';

@Component({
  selector: 'app-homedummy',
  templateUrl: './homedummy.component.html',
  styleUrls: ['./homedummy.component.css']
})
export class HomedummyComponent implements OnInit {
  dummyData = [];
  constructor(private apiservice : ServiceapiService,private router: Router) {
    
   
    if(this.apiservice.authUser()){
            
       
          for(let i = 0; i<this.apiservice.getdummyVal().length;i++){
              this.dummyData.push( this.apiservice.getdummyVal()[i]);
            
          }
        
            
              
          }
          
          $(document).ready( function () {
            $('#tabledata_id').DataTable({
                "searching": false
        
            });
        } );  
   }
   logout(){
    console.log('table response');
    this.router.navigate(['login']);
    localStorage.removeItem('token');
    
   }
  ngOnInit() {
  }

}
