import { Component } from "@angular/core";
import { NgForm } from "@angular/forms";

import { UserService } from "../../services";

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html'
})

export class LoginComponent {

    constructor(private userService: UserService){}

    onLogin(form: NgForm) {
        const email = form.value.email;
        const password = form.value.password;
        this.userService.userLogin(email, password).subscribe(
            (res) => console.log(res),
            (err) => console.log(err)
        )
    }
}