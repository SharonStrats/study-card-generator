import { Injectable } from "@angular/core";
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";

@Injectable()
export class AuthGuard implements CanActivate {
    
    constructor(private router: Router){}
        
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot){
        if (localStorage.getitem('currentUser')){
            // successfully logged in will return true
            return true;
        }
        // not logged in so it will redirect to login page
        this.router.navigate(['/login'], {queryParams: { returnUrl: state.url}})
    }
}