import { Component, OnInit,ViewChild,OnDestroy,ElementRef } from '@angular/core';
import { UserService} from 'src/app/services/user.service';
import {AddPost} from 'src/app/models/post.model';
import { NgForm } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-editpost',
  templateUrl: './editpost.component.html',
  styleUrls: ['./editpost.component.css']
})
export class EditpostComponent implements OnInit,OnDestroy {
  @ViewChild('pform',{static:true}) pform:NgForm;
 
 
  
  error:string;
  routeSubs:Subscription;

  constructor(private router:Router, private appService:UserService, private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.routeSubs=this.activatedRoute.params.subscribe(params=>{
      const productid=params['productid'];
      console.log(productid);
      if(productid){
        const subs=this.appService.getProductbyid(productid).subscribe(res=>{
          console.log(res)
          
          this.pform.setValue({
           productid:productid,       
           name:res.name,  
         desc:res.desc,
         price:res.price
        
        
         
          });
          console.log(res);
          subs.unsubscribe();
        });
      }          
    });
  }

  
  update(){
    
    
     const p=this.pform.value;
    console.log(p);
     
     const subs=this.appService.updateproduct(p).subscribe((response)=>{
       console.log(p);
      console.log(response);      
      if(response.status=='success'){
        alert("updated Successfully")
          this.router.navigateByUrl("allpost");
        }else{
        this.error=response.message;
       }
       subs.unsubscribe();
       });
      
      }

  
  ngOnDestroy(){
    this.routeSubs.unsubscribe();
  }

}
