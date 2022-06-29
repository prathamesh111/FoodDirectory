import { Action } from "@ngrx/store";
import { Ingredients } from "src/app/shared/ingredients.model";
export const ADD_INGREDIENT = 'ADD_INGREDIENT';
export const ADD_INGREDIENTS = 'ADD_INGREDIENTS';
export const UPDATE_INGREDIENTS = 'UPDATE_INGREDIENTS';
export const DELETE_INGREDIENTS = 'DELETE_INGREDIENTS';
export const EDIT_START = 'EDIT_START';
export const EDIT_STOP = 'EDIT_STOP';




export class AddIngredient implements Action {
   readonly type = ADD_INGREDIENT;
   constructor(public payload: Ingredients) { }
}

export class AddIngredients implements Action {
   readonly type = ADD_INGREDIENTS;
   constructor(public payload: Ingredients[]) {
   }
}

export class UpdateIngredients implements Action {
   readonly type = UPDATE_INGREDIENTS;
   constructor(public payload: Ingredients) { }
}

export class DeleteIngredients implements Action {
   readonly type = DELETE_INGREDIENTS;
}

export class StartEdit implements Action {
   readonly type = EDIT_START;
   constructor(public payload: number) { }
}

export class StopEdit implements Action {
   readonly type = EDIT_STOP;
}

export type SlActions =
   AddIngredient |
   AddIngredients |
   UpdateIngredients |
   DeleteIngredients |
   StartEdit |
   StopEdit;