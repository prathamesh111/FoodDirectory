import { EventEmitter, Injectable } from "@angular/core";
import { Recipe } from "./recipe.model";
import { Ingredients } from "../shared/ingredients.model";
import { ShoppingListService } from "../shopping-list/shoppingList.service";
@Injectable()
export class RecipieService{

 recipeSelected = new EventEmitter<Recipe>();

 constructor(private ShoppingListService : ShoppingListService){}

 private recipies : Recipe[] = [
    new Recipe('recipe',
      'tet',
      'https://2.bp.blogspot.com/-GAyJEu7QA_Q/WGIbZMqbaWI/AAAAAAAAADw/DTQKC47jlyMs0PIsepvCzhFFjxJiXSNQwCLcB/s1600/veg-maharaja-mac_McDonaldsIndia_071216-.jpg',
      [
        
        new Ingredients("girr",1),
        new Ingredients("meat",14),
          
      ]),
      new Recipe('recipe',
      'tet',
        'https://2.bp.blogspot.com/-GAyJEu7QA_Q/WGIbZMqbaWI/AAAAAAAAADw/DTQKC47jlyMs0PIsepvCzhFFjxJiXSNQwCLcB/s1600/veg-maharaja-mac_McDonaldsIndia_071216-.jpg',
        [
          
          new Ingredients("tre",12),
          new Ingredients("mewqwat",142),
            
        ]),
  ];

  getRecipies(){
      return this.recipies.slice();
  }
  addingredToShopList(ingredient : Ingredients[]){
    this.ShoppingListService.addIngredients(ingredient);
  }
}
