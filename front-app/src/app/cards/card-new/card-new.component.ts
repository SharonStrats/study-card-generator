import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

import { CardsService } from "../../services";
import { Card } from "../../cards";

@Component({
  selector: 'app-card-new',
  templateUrl: './card-new.component.html',
  styleUrls: ['./card-new.component.css']
})
export class CardNewComponent implements OnInit {
  card: Card;
  constructor(private router: Router, private cardsService: CardsService) { }

  ngOnInit() {
  }

  onCreateCard(form) {
    console.log(form.value.question);
    console.log(form.value.answer);
    console.log(this.tagsInArray(form.value.tags));
    this.card = new Card(form.value.question, form.value.answer,this.tagsInArray(form.value.tags));
    this.cardsService.storeCard(this.card)
      .subscribe(
        (res) => {
          console.log(res);
          alert("Card created successfully!");
          this.router.navigate(['/card']);},
        (err) => console.log(err) 
      );
  }

  tagsInArray(tags) {
    tags = tags.replace(/\s+/g,'');
    return tags.split(",");
  }

}
