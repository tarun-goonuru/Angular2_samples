import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { UsersComponent } from './users/users.component';
import { AuthGuard } from './login/login.authService';
import { AddoredituserComponent } from './addoredituser/addoredituser.component';

// Route Configuration
export const routes: Routes = [
  { 
  	path: '', 
  	redirectTo:'login', 
  	pathMatch:'full'
  },
  { 
  	path: 'login', 
  	component: LoginComponent 
  },
  { 
  	path: 'home', 
  	component: HomeComponent,
  	canActivate: [AuthGuard],
	children: [{ 
	  	path: 'users', 
	  	component: UsersComponent,
	  	canActivate: [AuthGuard] 
  	},
    {
      path: 'addoredituser/:_id', 
      component: AddoredituserComponent,
      canActivate: [AuthGuard] 
    }]
  }
];

// Deprecated provide
export const routing: ModuleWithProviders = RouterModule.forRoot(routes);