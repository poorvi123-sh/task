import { Component, OnInit,ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  @ViewChild("login",{static:true}) login:NgForm;

  constructor(private authService:AuthService) { }
  loginError:boolean=false;

  ngOnInit(): void {
  }

  doLogin(){
    console.log(this.login.value);
    this.authService.login(this.login.value);
    alert("logged successfully");
    
  } 

}
