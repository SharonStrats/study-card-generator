import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";

import { UserService } from "../../services";

@Component({
    selector: 'app-signup',
    templateUrl: './signup.component.html'
})

export class SignupComponent implements OnInit{
    
    constructor(private userService: UserService){

    }

    ngOnInit(){

    }

    onSignup(form: NgForm) {
        const email = form.value.email;
        const password = form.value.password;
        this.userService.userSignup(email, password).subscribe(
            (res) => console.log(res),
            (err) => console.log(err))
    }
}