import { Ingredients } from "../../shared/ingredients.model";
import * as ShoppingListActions from "./shopping-list.actions";


const initialState = {
    
    ingredients : [
        new Ingredients('burger', 269),
        new Ingredients('pizza', 300)
    ],
}
export function shoppingListReducer(state = initialState, action: ShoppingListActions.AddIngredient){
    switch(action.type){
        case ShoppingListActions.ADD_INGREDIENT : 
            const a = {
                ...state,
                ingredients:[...state.ingredients, action.payload]
            };
            return a;

                
        default : 
            return state;
    }
}