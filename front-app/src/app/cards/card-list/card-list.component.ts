import { Component, Input } from "@angular/core";
import { Router } from "@angular/router";
import { Card } from "../card.model";

@Component({
    selector: 'app-card-list',
    templateUrl: './card-list.component.html',
    styleUrls: ['./card-list.component.css']
})

export class CardListComponent {
    @Input() card: Card;

    constructor(private router: Router){

    }

    onSelectCard() {
        // this.router.navigate(['/card', this.card.id, 'edit'])
    }
}