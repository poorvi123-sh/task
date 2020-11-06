import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {UserService} from '../services/user.service';
import {AddPost} from '../models/post.model';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-removepost',
  templateUrl: './removepost.component.html',
  styleUrls: ['./removepost.component.css']
})
export class RemovepostComponent implements OnInit {
  addpost:AddPost;
  routeSubs:Subscription;

  constructor(private activatedRoute:ActivatedRoute,private router:Router,private userservice:UserService) { }

  ngOnInit(): void {
    this.routeSubs=this.activatedRoute.params.subscribe(params=>{
      const productid=params['productid'];
      const subs=this.userservice.getProductbyid(productid).subscribe(post=>{
        this.addpost=post;
        subs.unsubscribe();
      });
    });
    
  }
  remove(){
    const subs=this.userservice.removeproduct(this.addpost.productid).subscribe(response=>{
      console.log(response); 
      this.router.navigateByUrl("/allpost");       
      subs.unsubscribe();
    });
  }
 

}
