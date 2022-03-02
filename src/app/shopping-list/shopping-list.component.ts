import { Component, Input, OnInit, Output } from '@angular/core';
import { Ingredients } from '../shared/ingredients.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
 ingredients : Ingredients[] = [
  new Ingredients('burger', 269),
  new Ingredients('pizza', 300)
];

  constructor() { }

  ngOnInit(): void {
  }

  onIngredientAdded(ingredient : Ingredients){
  this.ingredients.push(ingredient);
  }

}
