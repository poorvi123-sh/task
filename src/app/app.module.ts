import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AuthInterceptor } from './auth/auth-interceptor';

import {HttpClientModule,HTTP_INTERCEPTORS} from '@angular/common/http';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegistrationComponent } from './registration/registration.component';
import { ShowallComponent } from './showall/showall.component';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './header/header.component';
import { LogoutComponent } from './logout/logout.component';
import { PostComponent } from './post/post.component';
import { AllpostComponent } from './allpost/allpost.component';
import { CreateblogComponent } from './createblog/createblog.component';
import { BlogComponent } from './blog/blog.component';

import { EditpostComponent } from './editpost/editpost.component';
import { PostcommentComponent } from './postcomment/postcomment.component';
import { DeletecommentComponent } from './deletecomment/deletecomment.component';
import { RemovepostComponent } from './removepost/removepost.component';


@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponent,
    ShowallComponent,
    LoginComponent,
    HeaderComponent,
    LogoutComponent,
    PostComponent,
    AllpostComponent,
    CreateblogComponent,
    BlogComponent,
    
    EditpostComponent,
    PostcommentComponent,
    DeletecommentComponent,
    RemovepostComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,

  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
