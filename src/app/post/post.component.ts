import { Component, OnInit,ViewChild,ElementRef } from '@angular/core';
import {FormGroup,FormControl} from '@angular/forms';
import {UserService } from '../services/user.service';
import { NgForm } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import {AddPost} from '../models/post.model';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  regForm: FormGroup;
  @ViewChild("image",{static:false}) imageInput:ElementRef;
  error:string;
  
  routeSubs:Subscription;

  constructor(private userService:UserService,private router:Router,private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.regForm = new FormGroup({
      productid: new FormControl(),
      name: new FormControl(),
      desc: new FormControl(),
      price: new FormControl(),
      photo: new FormControl(),
    });
  }
  
  onSubmit() {
    const file = (this.imageInput.nativeElement as HTMLInputElement).files[0];
     this.regForm.patchValue({ "photo": file });
     console.log(file);
     
    this.userService.saveproduct(this.regForm.value).subscribe(data => {
      console.log(data);
      this.router.navigateByUrl("/allpost");
      console.log(this.regForm.value);
      alert("posted sucessfully");
      this.router.navigateByUrl("/allpost");
    })
  }
 
  
}
