import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import {Globals} from '../app.globals';

@Component({
  selector: 'app-navheader',
  templateUrl: './navheader.component.html',
  styleUrls: ['./navheader.component.css']
})
export class NavheaderComponent implements OnInit {

  private gs:Globals;
  constructor(private router:Router) { 
    this.gs = Globals.getInstance();
  }

  ngOnInit() {
  }

  logOutUser(){
    console.log(this.gs.getData());
  	 localStorage.setItem('loginUserToken', "");
  	 this.router.navigate(['login']);
  }
}
