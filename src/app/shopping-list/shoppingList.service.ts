import { EventEmitter } from "@angular/core";
import { Ingredients } from "../shared/ingredients.model";
export class ShoppingListService{

    ingredientsChanged = new EventEmitter<Ingredients[]>();
  private  ingredients : Ingredients[] = [
        new Ingredients('burger', 269),
        new Ingredients('pizza', 300)
    ];

    addIngredient(ingredient : Ingredients){
        this.ingredients.push(ingredient);
        this.ingredientsChanged.emit(this.ingredients.slice());
    }

    getIngredients(){
        return this.ingredients.slice();
    }

    // deleteIngredients(){
    //     this.ingredientsArr.pop();
    //   }
}