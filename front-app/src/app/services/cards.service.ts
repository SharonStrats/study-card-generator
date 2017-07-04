import { Injectable } from '@angular/core';
import { Http } from "@angular/http";
import { Card } from "../models";

import 'rxjs/Rx';

@Injectable()
export class CardsService {

  constructor(private http: Http) { }
  storeCard(card: Card) {
    return this.http.post('https://flash-card-d6981.firebaseio.com/cards.json', card);
  }
  getCards() {
    return this.http.get('https://flash-card-d6981.firebaseio.com/cards.json').map(res => {
      return this.convertToArray(res.json())
    });
  }

  convertToArray(data: any){
    /*******************************************************************************************
     * CONVERT FIREBASE OBJECTS COLLECTION INTO ARRAY                                          *
     * NOTE: This function is to modify data received from firebase into A array of collection *
     * It will store the key value of the objects as the property.                             *
     ******************************************************************************************/
    let dataArray = [];
    let keys = Object.keys(data); //get all keys on Object data and pass it as array
    keys.forEach((key: any) => {
      data[key].key = key;
      dataArray.push(data[key]);});
    return dataArray;
  }
}
