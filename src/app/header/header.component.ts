import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  login=false;
  name:string;

  constructor(private authService:AuthService) { }

  ngOnInit(): void {

    this.authService.getAuthStatusListener().subscribe(data=> {
      this.login=data;
      if(this.login){
        this.name=this.authService.getUname();
      }
      else{
        this.name=undefined;
      }
    });
  }


  }


