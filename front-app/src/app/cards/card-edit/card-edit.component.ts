import { Component, Input } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Card } from "../../models";

@Component({
    selector: 'app-card-edit',
    templateUrl: './card-edit.component.html'
})

export class CardEditComponent {
    constructor (private route: ActivatedRoute) {
        
    }
}