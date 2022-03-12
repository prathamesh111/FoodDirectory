import { Ingredients } from "../shared/ingredients.model";
import { Subject } from 'rxjs';
export class ShoppingListService{

    ingredientsChanged = new Subject<Ingredients[]>();
  private  ingredients : Ingredients[] = [
        new Ingredients('burger', 269),
        new Ingredients('pizza', 300)
    ];

    addIngredient(ingredient : Ingredients){
        this.ingredients.push(ingredient);
        this.ingredientsChanged.next(this.ingredients.slice());
    }

    getIngredients(){
        return this.ingredients;
        // return [...this.ingredients] 
    }

    addIngredients(ingredient : Ingredients[]){
        this.ingredients= [...this.ingredients, ...ingredient];
        this.ingredientsChanged.next(this.ingredients.slice());
    }
    // this.ingredients= [
    //     "a","b","c"
    // ]
    // inpArr= ["4r","66"]
    // res= [a , b, c , [ 4r,  66]]
    // deleteIngredients(){
    //     this.ingredientsArr.pop();
    //   }
}