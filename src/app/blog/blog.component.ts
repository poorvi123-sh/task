import { Component, OnInit,ViewChild } from '@angular/core';
import {NgForm} from '@angular/forms';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {
  @ViewChild("myform",{static:true}) myform:NgForm;
  constructor(private httpClient:HttpClient,private router:Router) { }

  ngOnInit(): void {
  }
  onSubmit(formData:NgForm){
    console.log(formData);
    this.httpClient.post("http://localhost:3000/blog",formData).subscribe(
      res=>{
        console.log(res);
        
        this.router.navigateByUrl("/showblog")
      })

    }  
  }
