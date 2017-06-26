import { Component } from "@angular/core";
import { Card } from "./card.model";

@Component({
    selector: 'app-cards',
    templateUrl: './cards.component.html'
})

export class CardsComponent {
    cards: Card[] = [
        {
            id: 1,
            question: 'loremipsum',
            answer: 'dolorset',
            tags: ['lorem', 'ipsum']
        },
        {
            id: 2,
            question: 'loremipsum',
            answer: 'dolorset',
            tags: ['lorem', 'ipsum']
        },
        {
            id: 3,
            question: 'loremipsum',
            answer: 'dolorset',
            tags: ['lorem', 'ipsum']
        },
    ]
}