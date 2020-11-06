import { Component, OnInit } from '@angular/core';
import {User} from 'src/app/models/user.model';
import {UserService} from '../services/user.service';

@Component({
  selector: 'app-showall',
  templateUrl: './showall.component.html',
  styleUrls: ['./showall.component.css']
})
export class ShowallComponent implements OnInit {
  users:User[];
  constructor(private userService:UserService) { }

  ngOnInit(): void {
    this.userService.getAllUsers().subscribe((data:User[])=>{
      if(data!=null && data.length>0){
        data.map(u=>u.photo=this.userService.baseUrl+u.photo);
      
        this.users=data;
        console.log(this.users);
       
      }
    
    });
    
    
    
  }
  }


