import { Component } from "@angular/core";
import { NgForm } from "@angular/forms";

@Component({
    selector: 'app-signin',
    templateUrl: './signin.component.html'
})

export class SigninComponent {

    onSignIn(form: NgForm) {
        const email = form.value.email;
        const password = form.value.password;
        console.log(email, password);
    }
}