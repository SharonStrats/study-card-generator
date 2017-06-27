import { Component, Input } from "@angular/core";
import { Card } from "../card.model";

@Component({
    selector: 'app-card-list',
    templateUrl: './card-list.component.html',
    styleUrls: ['./card-list.component.css']
})

export class CardListComponent {
    @Input() card: Card;
}