import { Component, OnInit, OnDestroy} from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { Ingredients } from '../shared/ingredients.model';
import { ShoppingListService } from './shoppingList.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
})
export class ShoppingListComponent implements OnInit  {
  ingredients : Observable<{ingredients : Ingredients[]}> ;
  igChangeSub : Subscription;

  constructor(private ShoppingListService :ShoppingListService, private store : Store<{ShoppingList: {ingredients : Ingredients[]}}> ) { }

  ngOnInit(): void {
  this.ingredients = this.store.select('ShoppingList');
    // this.ingredients = this.ShoppingListService.getIngredients();
    // const eff =  this.ShoppingListService.getIngredients();
    // console.log(eff.length);
  //   this.ingredients =[];
  //  const ff =  this.ShoppingListService.getIngredients();
  //  console.log(ff);
  //  this.igChangeSub= this.ShoppingListService.ingredientsChanged.subscribe(
  //     (ingredient : Ingredients[]) =>{

  //       this.ingredients = ingredient;

  //     }
  //   );
    // console.log(this.ingredients);
  }


  onEdit(index:number){
    this.ShoppingListService.startedEditing.next(index);
  }



 

}
