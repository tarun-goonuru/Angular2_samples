import {Injectable } from '@angular/core';
import { Router,CanActivate,ActivatedRouteSnapshot,RouterStateSnapshot} from '@angular/router';

@Injectable()
export class AuthGuard implements CanActivate {
    constructor(private router: Router) {}
 
    public canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        if (!localStorage.getItem('loginUserToken')) {
        	console.log("local token in authServ",localStorage.getItem('loginUserToken'));
            this.router.navigate(['login']);
            return false;
        } else {
            return true;
        }
    }
}