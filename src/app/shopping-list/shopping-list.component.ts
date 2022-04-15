import { Component, OnInit, OnDestroy} from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { Ingredients } from '../shared/ingredients.model';
import * as fromappReducer from '../store/app.reducer'
import * as fromShoppingListActions  from './store/shopping-list.actions'

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
})
export class ShoppingListComponent implements OnInit  {
  ingredients : Observable<{ingredients : Ingredients[]}> ;

  constructor( private store : Store<fromappReducer.AppState> ) { }

  ngOnInit() {
  this.ingredients = this.store.select('shoppingList');
  // this.store.subscribe(statee => console.log({ statee }));
  }


  onEdit(index:number){
    // this.ShoppingListService.startedEditing.next(index);
    this.store.dispatch( new fromShoppingListActions.StartEdit(index));
  }



 

}
