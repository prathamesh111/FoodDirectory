import { Component, OnInit, OnDestroy} from '@angular/core';
import { Subscription } from 'rxjs';
import { Ingredients } from '../shared/ingredients.model';
import { ShoppingListService } from './shoppingList.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
})
export class ShoppingListComponent implements OnInit, OnDestroy  {
  ingredients : Ingredients[];
  igChangeSub : Subscription;

  constructor(private ShoppingListService :ShoppingListService ) { }

  ngOnInit(): void {
    this.ingredients = this.ShoppingListService.getIngredients();
    // const eff =  this.ShoppingListService.getIngredients();
    // console.log(eff.length);
  //   this.ingredients =[];
  //  const ff =  this.ShoppingListService.getIngredients();
  //  console.log(ff);
   this.igChangeSub= this.ShoppingListService.ingredientsChanged.subscribe(
      (ingredient : Ingredients[]) =>{

        this.ingredients = ingredient;

      }
    );
    // console.log(this.ingredients);
  }
  onIngredientAdded(ingredient : Ingredients){
    this.ingredients.push(ingredient);
}

ngOnDestroy(){
  this.igChangeSub.unsubscribe();
}



 

}
