import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http:HttpClient) { }
  apiurl='http://localhost:4200';

  GetAll(){
    return this.http.get(this.apiurl);
  }
  Getbycode(code:any){
    return this.http.get(this.apiurl+'/'+code);
  }
  
  procedsignupup(inputdata:any){
  return this.http.post(this.apiurl, inputdata);
  }

  Updateuser(code:any, inputdata:any){
    return this.http.put(this.apiurl+'/'+code, inputdata);
    }

  isloggedIn(){
    return sessionStorage.getItem('username')!=null;
  }
  GetUserrole(){
    return sessionStorage.getItem('userrole')!=null?sessionStorage.getItem('userrole')?.toString():'';
  }
}
       
