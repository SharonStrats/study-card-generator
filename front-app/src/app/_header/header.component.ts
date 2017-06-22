import { Component, OnInit } from "@angular/core";

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styles: [`
        .navbar {
            border-radius: 0;
        }
    `]
})

export class HeaderComponent implements OnInit {
    constructor() {

    }

    ngOnInit(){

    }
}