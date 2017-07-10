import { Component, OnInit } from "@angular/core";

@Component({
    selector: 'app-header-user',
    templateUrl: './user-header.component.html',
    styles: [`
        .navbar {
            border-radius: 0;
        }
    `]
})

export class UserHeaderComponent implements OnInit {
    constructor() {

    }

    ngOnInit(){

    }
}