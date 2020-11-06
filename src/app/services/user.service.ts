import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {User} from '../models/user.model';
import {AddPost} from '../models/post.model';
import {Myblog} from '../models/myblog.model';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient:HttpClient) { }

  baseUrl="http://localhost:3000/";
  url=this.baseUrl+"users";
  urlproduct=this.baseUrl+"product";
  blogurl=this.baseUrl+"blog";
 
 

  saveReg(regData):Observable<string>{
    const form=new FormData();
    form.append("userid",regData.userid);
    form.append("name",regData.name);
    form.append("age",regData.age);
    form.append("email",regData.email); 
    form.append("password",regData.password); 
    form.append("city",regData.city); 
    form.append("contact",regData.contact); 
    form.append("photo",regData.photo); 
    
    return this.httpClient.post<string>(this.url,form);
  
}

getAllUsers():Observable<User[]>{
  return this.httpClient.get<User[]>(this.url);
}
saveproduct(regData):Observable<string>{
  const form=new FormData();
  form.append("productid",regData.productid);
  form.append("name",regData.name);
  form.append("desc",regData.desc);
  form.append("price",regData.price); 
  form.append("photo",regData.photo);
  
  return this.httpClient.post<string>(this.urlproduct,form);

}

getAllPost():Observable<AddPost[]>{
  return this.httpClient.get<AddPost[]>(this.urlproduct);
}


getProductbyid(productid:number):Observable<AddPost>{
  return this.httpClient.get<AddPost>(this.urlproduct+"/"+productid);
}
updateproduct(addpost:AddPost):Observable<{status:string,message:string}>{
  return this.httpClient.put<{status:string,message:string}>(this.urlproduct+"/"+addpost.productid,addpost);
 }

 removeproduct(productid:number):Observable<{status:string,message:string}>{
  return this.httpClient.delete<{status:string,message:string}>(this.urlproduct+"/"+productid);
}
 getAllblog():Observable<Myblog[]>{
  return this.httpClient.get<Myblog[]>(this.blogurl);
}



}
