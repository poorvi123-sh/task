import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegistrationComponent } from './registration/registration.component';
import { LoginComponent } from './login/login.component';
import { AllpostComponent } from './allpost/allpost.component';
import { LogoutComponent } from './logout/logout.component';
import { PostComponent } from './post/post.component';
import { ShowallComponent } from './showall/showall.component';
import { CreateblogComponent } from './createblog/createblog.component';
import { BlogComponent } from './blog/blog.component';

import { EditpostComponent } from './editpost/editpost.component';
import { PostcommentComponent } from './postcomment/postcomment.component';
import { RemovepostComponent } from './removepost/removepost.component';


const routes: Routes = [
  {path:'admin',component:ShowallComponent},
  {path:'createblog',component:CreateblogComponent},
  {path:'blog',component:BlogComponent},
  {path:'reg',component:RegistrationComponent},
  {path:'login',component:LoginComponent},
  {path:'allpost',component:AllpostComponent},
  {path:'logout',component:LogoutComponent},
  {path:'post',component:PostComponent},
  {path:'post/:productid',component:EditpostComponent},
  {path:'comments/:sno',component:PostcommentComponent},
  {path:'removepost/:productid',component:RemovepostComponent},
  {path:'',redirectTo:'login',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
