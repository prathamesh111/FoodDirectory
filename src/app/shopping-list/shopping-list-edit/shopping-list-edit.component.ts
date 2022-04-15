import { Component, OnInit, Input, OnDestroy, ViewChild } from '@angular/core';
import { Ingredients } from '../../shared/ingredients.model';
import { FormControl, NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Store } from '@ngrx/store';
import * as ShoppingListActions from '../store/shopping-list.actions';
import * as fromShopppingList from  '../store/shopping-list.reducer';
import * as fromAppReducer from '../../store/app.reducer'
@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html',
  styleUrls: ['./shopping-list-edit.component.css']
})

export class ShoppingListEditComponent implements OnInit, OnDestroy {


@ViewChild('f') slForm : NgForm;
btnDisabled:boolean = true;
EditSubscription:Subscription;
editMode = false;
editeditem : Ingredients;

constructor(private store: Store<fromAppReducer.AppState> ) { }

ngOnInit() {

  this.EditSubscription= this.store.select('shoppingList').subscribe(stateData => {
    if(stateData.EditedItemIndex > -1){
      this.editMode= true;
      this.editeditem = stateData.editedIngredient;
      this.slForm.setValue({
        item : this.editeditem.name,
        amount : this.editeditem.amount
      })
    }
    else{
      this.editMode= false;

    }
  })
    
  } 

  onAddItem(form:NgForm){
    this.btnDisabled=false;
    const value = form.value
    const newIngredient = new Ingredients(value.item, value.amount);
    if(this.editMode){
      // this.ShoppingListService.updateIngredient(this.editedItemIndex, newIngredient);
      this.store.dispatch(new ShoppingListActions.UpdateIngredients(newIngredient));
    }else{
      // this.ShoppingListService.addIngredient(newIngredient);
      this.store.dispatch(new ShoppingListActions.AddIngredient(newIngredient));
    }
    this.editMode= false;
    this.slForm.reset();

  }

  onClear(){
    this.slForm.reset();
    this.editMode=false;
    this.store.dispatch(new ShoppingListActions.StopEdit());
  }

 

  onDeleteItems(){
    // this.ShoppingListService.deleteItems(this.editedItemIndex);
    this.store.dispatch(new ShoppingListActions.DeleteIngredients());
   this.onClear();
  }

  ngOnDestroy(): void {
    this.EditSubscription.unsubscribe();
    this.store.dispatch(new ShoppingListActions.StopEdit());
}
 

}

