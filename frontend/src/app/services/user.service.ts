import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import { User, Login } from "../models";
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

    userRegister(name, email, password){
        let user = new User(name, email, password);
        return this.http.post('/api/user/register', user, this.headers);
    }

    userLogin(email, password){
        let login = new Login(email, password);
        return this.http.post('/api/user/login', login, this.headers);
            // .map(res => res.json())
            // .map(res => {
            //     if (res.success){
            //         localStorage.setItem('auth_token', res.auth_token);
            //         this.loggedIn = true;
            //     }
            //     return res.success;
            // })

    }

    userLogout() {
        localStorage.removeItem('auth_token');
        this.loggedIn = false;
    }

    isLoggedIn() {
        return this.loggedIn;
    }
}