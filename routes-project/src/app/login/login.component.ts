import { Component, OnInit } from '@angular/core';
import { LoginService } from './login.service';
import { Router} from '@angular/router';
import { ShareDataService} from '../app.sharedata.service';
import {Globals} from '../app.globals';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [LoginService]
})
export class LoginComponent implements OnInit {
  private gs:Globals;
  username = this.username || '';
  password = this.password || '';
  errorMessage;	
  constructor(public loginService: LoginService,private router:Router) {
      this.gs = Globals.getInstance();
   }
   
  ngOnInit() {
  }

  logInUser(){

    this.loginService.isUserExist(this.username, this.password).subscribe(
      data => {
          //console.log("Data: ",data.token);
          
          if(data.token){
            localStorage.setItem('loginUserToken', data.token);
            this.router.navigate(['home']);
          }else{
            this.errorMessage = data.message;
          }
      },
      err => {
          console.log("ERROR: ",err);
      },
      () => {
          console.log("Completed");
      }
    );
  	this.gs.setData({"aa":"aaaabbb"});
    //console.log(this.gs.getData());
    
  }
}
