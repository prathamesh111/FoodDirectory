import { Component, Input, OnInit, Output } from '@angular/core';
import { Ingredients } from '../shared/ingredients.model';
import { ShoppingListService } from './shoppingList.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
})
export class ShoppingListComponent implements OnInit {
  ingredients : Ingredients[];

  constructor(private ShoppingListService :ShoppingListService ) { }

  ngOnInit(): void {
    this.ingredients = this.ShoppingListService.getIngredients();
    this.ShoppingListService.ingredientsChanged.subscribe(
      (ingredient : Ingredients[]) =>{  
        this.ingredients = ingredient;

      }
    );
    // console.log(this.ingredients);
  }
  onIngredientAdded(ingredient : Ingredients){
    this.ingredients.push(ingredient);
}

 

}
