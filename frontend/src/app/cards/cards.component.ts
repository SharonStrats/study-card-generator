import { Component, OnInit } from "@angular/core";
import { Response } from "@angular/http";
import { CardsService } from "../services";
import { Card } from "../models";

@Component({
    selector: 'app-cards',
    templateUrl: './cards.component.html',
    styleUrls: ['./cards.component.css']
})

export class CardsComponent implements OnInit{
    tags = ['Javascript', 'Database', 'Python', 'Angular', 'Node', 'NPM']
    cards: Card[];

    constructor (private cardsService: CardsService){}

    ngOnInit() {
        this.cardsService.getCards().subscribe(
            (data: any) => {
                this.cards = data;
            },
            (err) => console.log(err)
        )
    }
}