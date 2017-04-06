import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';


import { routing } from './app.router';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { NavheaderComponent } from './navheader/navheader.component';
import { FooterComponent } from './footer/footer.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { UsersComponent } from './users/users.component';
import { AddoredituserComponent } from './addoredituser/addoredituser.component';

//Services
import { UserDataService } from './users/users.service';
import { LoginService } from './login/login.service';
import { AuthGuard } from './login/login.authService';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    NavheaderComponent,
    FooterComponent,
    SidenavComponent,
    UsersComponent,
    AddoredituserComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [UserDataService,LoginService,AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
