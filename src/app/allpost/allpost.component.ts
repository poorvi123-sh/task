import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import {AddPost } from '../models/post.model';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-allpost',
  templateUrl: './allpost.component.html',
  styleUrls: ['./allpost.component.css']
})
export class AllpostComponent implements OnInit {
  addposts:AddPost[];
 
  

  subs:Subscription;
  constructor(private userService:UserService,private router:Router) { }

  ngOnInit(): void {
    this.userService.getAllPost().subscribe((data:AddPost[])=>{
      if(data!=null && data.length>0){
        data.map(u=>u.photo=this.userService.baseUrl+u.photo);
      }
      this.addposts=data;
    })
  
  }
  

  

}
