import { Component } from "@angular/core";
import { Card } from "./card.model";

@Component({
    selector: 'app-cards',
    templateUrl: './cards.component.html',
    styleUrls: ['./cards.component.css']
})

export class CardsComponent {
    tags = ['Javascript', 'Database', 'Python', 'Angular', 'Node', 'NPM']
    cards: Card[] = [
        {
            id: 1,
            question: 'question #1',
            answer: 'dolorset',
            tags: ['lorem', 'ipsum']
        },
        {
            id: 2,
            question: 'question #2',
            answer: 'dolorset',
            tags: ['lorem', 'ipsum']
        },
        {
            id: 3,
            question: 'question #3',
            answer: 'dolorset',
            tags: ['lorem', 'ipsum']
        },
        {
            id: 4,
            question: 'question #4',
            answer: 'dolorset',
            tags: ['lorem', 'ipsum']
        },
        {
            id: 5,
            question: 'question #5',
            answer: 'dolorset',
            tags: ['lorem', 'ipsum']
        },
        {
            id: 6,
            question: 'question #6',
            answer: 'dolorset',
            tags: ['lorem', 'ipsum']
        },
    ]
}