import { Ingredients } from "../../shared/ingredients.model";
import * as ShoppingListActions from "./shopping-list.actions";



export interface State  {
    ingredients : Ingredients[];
    editedIngredient : Ingredients;
    EditedItemIndex : number;

}

export interface AppState {
    shoppingList : State
}

const initialState :State= {    
    ingredients : [
        new Ingredients('burger', 269),
        new Ingredients('pizza', 300)
    ],
    editedIngredient : null,
    EditedItemIndex : -1
}
export function shoppingListReducer(state:State = initialState, action: ShoppingListActions.SlActions){
    switch(action.type){
        case ShoppingListActions.ADD_INGREDIENT : 
           return{
                ...state,
                ingredients:[...state.ingredients, action.payload]  
            };
            
        case ShoppingListActions.ADD_INGREDIENTS : 
            return {
                ...state,
                ingredients: [...state.ingredients, ...action.payload]
            } 
            
        case ShoppingListActions.UPDATE_INGREDIENTS:
            const newIngred = state.ingredients[state.EditedItemIndex];
            const updatedIngredient = {
                ...newIngred, 
                ...action.payload

            }
            const updatedIngredients = [...state.ingredients];
            updatedIngredients[state.EditedItemIndex]= updatedIngredient;

            return {
                ...state,
                ingredients: updatedIngredients,
                editedIngredient : null,
                EditedItemIndex : -1
            }
        case ShoppingListActions.DELETE_INGREDIENTS : 
            return{
                ...state,
                ingredients: state.ingredients.filter( (ig, igindex) =>{
                    return igindex != state.EditedItemIndex;
                })
            }
        case ShoppingListActions.EDIT_START :
            return {
                ...state,
                EditedItemIndex :action.payload,
                editedIngredient : {...state.ingredients[action.payload]}

            } 
        case ShoppingListActions.EDIT_STOP : 

        return{
            ...state,
            EditedItemIndex : -1,
            editedIngredient : null
        }

        default : 
            return state;
    }
}