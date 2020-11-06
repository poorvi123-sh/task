import { Component, OnInit ,ViewChild,ElementRef} from '@angular/core';
import {FormGroup,FormControl, Validators} from '@angular/forms';
import {UserService} from '../services/user.service';


import {Router} from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  regForm: FormGroup;
  @ViewChild("image",{static:false}) imageInput:ElementRef;

  constructor(private userService:UserService,private router:Router) { }

  ngOnInit(): void {
    this.regForm = new FormGroup({
      userid: new FormControl('',Validators.required),
      name: new FormControl('',[Validators.required, Validators.pattern('^[a-zA-Z ]*$')]),
      contact: new FormControl('',[Validators.required,Validators.max(10),Validators.pattern("^[0-9]*$")]),
      email: new FormControl('',[Validators.required,Validators.email,Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]),
      password: new FormControl('',[
        Validators.required, 
        Validators.pattern('((?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,30})')
    ]),
      city: new FormControl('',Validators.required),
      age: new FormControl('',Validators.required),
      photo: new FormControl('',Validators.required)
    });
  }
  onSubmit() {
    const file = (this.imageInput.nativeElement as HTMLInputElement).files[0];
     this.regForm.patchValue({ "photo": file });
     console.log(file);
     
    this.userService.saveReg(this.regForm.value).subscribe(data => {
      console.log(data);
      console.log(this.regForm.value);
      
    })
  }

}
