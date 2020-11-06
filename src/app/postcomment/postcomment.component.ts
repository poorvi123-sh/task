import { Component, OnInit,ViewChild,ElementRef } from '@angular/core';
import {FormGroup,FormControl} from '@angular/forms';
import {UserService } from '../services/user.service';
import { NgForm } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import {AddPost} from '../models/post.model';

@Component({
  selector: 'app-postcomment',
  templateUrl: './postcomment.component.html',
  styleUrls: ['./postcomment.component.css']
})
export class PostcommentComponent implements OnInit {
  
  
  

  constructor(private userService:UserService,private router:Router,private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    
     

}

}

  
