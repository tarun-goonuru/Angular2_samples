import {Injectable } from '@angular/core';
import {Http, Response,Headers} from '@angular/http';
import {Observable} from 'rxjs/Observable';

import 'rxjs/add/operator/map';

@Injectable()
export class LoginService {
  
  constructor(private http: Http) {}
  private usersUrl = 'http://192.168.150.115:3000';

  isUserExist(user_name, password) {
     let headers = new Headers({ 'Content-Type': 'application/json' });
    return this.http.post(this.usersUrl,{ headers : headers, username : user_name, password : password})
    .map(this.extractData)
  }
  
  private extractData(res: Response) {
    return res.json();
    //let body = res.json();
    //return body.data || { };
  }
  
  private handleError (error: any) {
    // In a real world app, we might use a remote logging infrastructure
    // We'd also dig deeper into the error to get a better message
    let errMsg = (error.message) ? error.message :
    error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg); // log to console instead
    return Observable.throw(errMsg);
  }
}