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
    // const eff =  this.ShoppingListService.getIngredients();
    // console.log(eff.length);
  //   this.ingredients =[];
  //  const ff =  this.ShoppingListService.getIngredients();
  //  console.log(ff);
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
