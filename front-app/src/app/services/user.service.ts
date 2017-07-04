import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import { User } from "../models";
import 'rxjs/Rx';

@Injectable()

export class UserService {
    private loggedIn = false;
    private headers = new Headers();

    constructor(private http: Http){
        // initial result may be not Boolean Type
        this.loggedIn = !!localStorage.getItem('auth_token');
        // initialize header to use JSON type
        this.headers.append('Content-Type','application/json');
    }

    userSignup(email, password){
        let user = new User(email, password);
        return this.http.post('/api/user/signup', user, this.headers);
    }

    userLogin(email, password){
        return this.http.post('/login', JSON.stringify({email, password}), this.headers)
            .map(res => res.json())
            .map(res => {
                if (res.success){
                    localStorage.setItem('auth_token', res.auth_token);
                    this.loggedIn = true;
                }
                return res.success;
            })

    }

    userLogout() {
        localStorage.removeItem('auth_token');
        this.loggedIn = false;
    }

    isLoggedIn() {
        return this.loggedIn;
    }
}