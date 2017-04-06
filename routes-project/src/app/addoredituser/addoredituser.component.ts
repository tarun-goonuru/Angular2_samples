import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-addoredituser',
  templateUrl: './addoredituser.component.html',
  styleUrls: ['./addoredituser.component.css']
})
export class AddoredituserComponent implements OnInit {
  productID: string;	
  constructor(route: ActivatedRoute) { 
  	this.productID = route.snapshot.params['_id'];
  	console.log("productID-->",this.productID);
  }

  ngOnInit() {
  }
  
}
