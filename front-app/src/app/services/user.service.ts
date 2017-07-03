import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import 'rxjs/Rx';

@Injectable()

export class UserService {
    private loggedIn = false;

    constructor(private http: Http){
        // initial result may be not Boolean Type
        this.loggedIn = !!localStorage.getItem('auth_token');
    }

    userLogin(email, password){
        let headers = new Headers();
        headers.append('Content-Type','application/json');

        return this.http.post('/login', JSON.stringify({email, password}), headers)
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