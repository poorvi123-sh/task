import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable,Subject} from 'rxjs';
import {Router} from '@angular/router';
import { from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private name:string;
    private token:string;

    private login_url="http://localhost:3000/login";
    private logout_url="http://localhost:3000/logout";

    private authStatusListener = new Subject<boolean>();

  constructor(private httpClient:HttpClient,private router:Router) { }

  getToken(){
    return this.token;
}

getUname(){
  return this.name;
}

getAuthStatusListener() {
  return this.authStatusListener.asObservable();
}

login(loginData:{userid:string,password:string}):any{
  this.httpClient.post<{status:string,token:string,name:string}>(this.login_url,loginData).subscribe((response)=>{
          if(response.status=="SUCCESS"){
              this.token= response.token;
              this.name=response.name;
              this.authStatusListener.next(true);
              this.router.navigateByUrl("/createblog");
              
          }                          
  });
}
logout(){
  this.httpClient.get(this.logout_url).subscribe(response=>{
      this.token=undefined;
      this.name=undefined;
      this.authStatusListener.next(false); 
     this.router.navigateByUrl("/login");
  });
 
}


}
