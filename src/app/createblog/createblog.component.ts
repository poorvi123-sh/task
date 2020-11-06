import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-createblog',
  templateUrl: './createblog.component.html',
  styleUrls: ['./createblog.component.css']
})
export class CreateblogComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  blog(){
    // alert("Welcome to Blogging");
    this.router.navigateByUrl("/allpost");
  }
  

}
