import { Component, OnInit } from '@angular/core';
import { UserDataService } from './users.service';
import { Router} from '@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
  providers: [UserDataService]
})
export class UsersComponent implements OnInit {

  usersData;	
  constructor(public usersService: UserDataService,private router:Router) {
  		this.getUsersdata();
   }

  ngOnInit() {
  	
  }

  getUsersdata(){
      
  		this.usersService.getUsers().subscribe(
      data => {
          this.usersData = data;
      },
      err => {
          console.log("ERROR: ",err);
      },
      () => {
          console.log("Completed");
      }
    );
  }
  
  EditUser(user_id){
  	console.log("Edit-ID-->",user_id);
  	
  }

  DeleteUser(user_id){
  	this.usersService.deleteUser(user_id).subscribe(
      data => {
          console.log("VALUE RECEIVED: ",data);
          this.getUsersdata();
      },
      err => {
          console.log("ERROR: ",err);
      },
      () => {
          console.log("Completed");
      }
    );
  }
}
