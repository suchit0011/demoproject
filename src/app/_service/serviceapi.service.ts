import { Injectable } from '@angular/core';
import { HttpClient , HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ServiceapiService {
  set_header: any;
  set_toke:any;
  no_response:Array<any> = [
  {amount:"100",buy:"200",price:"300",timestamp:"1256953"},
  {amount:"150",buy:"300",price:"300",timestamp:"1256953"},
  {amount:"280",buy:"400",price:"300",timestamp:"1256953"},
  {amount:"300",buy:"500",price:"400",timestamp:"1256953"},
  {amount:"120",buy:"300",price:"400",timestamp:"1256953"},
  {amount:"190",buy:"200",price:"400",timestamp:"1256953"},
  {amount:"125",buy:"400",price:"400",timestamp:"1256953"},
  {amount:"130",buy:"500",price:"400",timestamp:"1256953"},
  {amount:"110",buy:"200",price:"400",timestamp:"1256953"},
  {amount:"165",buy:"200",price:"400",timestamp:"1256953"},
  {amount:"120",buy:"300",price:"400",timestamp:"1256953"},
  {amount:"190",buy:"200",price:"400",timestamp:"1256953"},
  {amount:"125",buy:"400",price:"400",timestamp:"1256953"},
  {amount:"130",buy:"500",price:"400",timestamp:"1256953"}
    ]
  constructor(private http : HttpClient) {}
  loginValue(user_value){
    // console.log('check value++', user_value);
   return this.http.post('https://testwallet.angelium.net/api/jwt/api-token-auth/',user_value);
    
  }
  getValue(token){
    this.set_toke = JSON.parse(token);
    this.set_header= new HttpHeaders({'Authorization':'JWT'+' '+this.set_toke})
    let user_val = {"pair":"anx/btc","timestamp":1573212003579}
    return this.http.post('https://testwallet.angelium.net/api/exchange/trades/',user_val,{ headers: this.set_header})
  }
  getdummyVal(){
    return this.no_response;
  }
  authUser(){
   return localStorage.getItem('token');
  }
  
}
