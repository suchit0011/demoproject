import { Component, OnInit } from '@angular/core';
import {ServiceapiService} from 'src/app/_service/serviceapi.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
token_val;
blankdata:boolean;
blankdata_msg;
tableData = [];
  constructor(private apiservice : ServiceapiService,private router: Router) {
    $(document).ready( function () {
      $('#table_id').DataTable({
          "searching": false
  
      });
  } );

    if(this.apiservice.authUser()){
this.token_val = localStorage.getItem('token');
this.apiservice.getValue(this.token_val).subscribe((res:any)=>{
  
  
  
  if(Array.isArray(res.data.trades) && res.data.trades.length){
    this.blankdata = true;
    for(let i = 0; i<res.data.trades.length;i++){
      this.tableData.push( res.data.trades[i]);
      
    }
    
  }else{
    this.blankdata=false;
      this.blankdata_msg = "Data Not Available";
  }
  
  // console.log('table response',this.tableData);
  
});
    }
   }

   logout(){
    console.log('table response');
    this.router.navigate(['login']);
    localStorage.removeItem('token');
    
   }
  ngOnInit() {
  }

}
