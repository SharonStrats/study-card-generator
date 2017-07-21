import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";

import { UserService } from "../../services";

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html'
})

export class RegisterComponent implements OnInit{
    errorStat = false;
    errorMsg: String;

    constructor(private userService: UserService){

    }

    ngOnInit(){

    }

    onRegister(form: NgForm) {
        console.log(form.value.uname);
        const uname    = form.value.uname;
        const email    = form.value.email;
        const password = form.value.password;
        const confirm  = form.value.confirm;
        if ( password === confirm ){
            this.errorStat = false;
            this.errorMsg  = ""; 
            this.userService.userRegister(uname, email, password).subscribe(
            (res) => console.log(res),
            (err) => console.log(err))
        }
        else {
            this.errorStat = true;
            this.errorMsg  = "Password did not match"; 
        }

    }
}