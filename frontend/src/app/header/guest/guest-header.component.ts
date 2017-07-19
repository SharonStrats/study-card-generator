import { Component, OnInit } from "@angular/core";

@Component({
    selector: 'app-header-guest',
    templateUrl: './guest-header.component.html',
    styles: [`
        .navbar {
            border-radius: 0;
        }
    `]
})

export class GuestHeaderComponent implements OnInit {
    constructor() {

    }

    ngOnInit(){

    }
}