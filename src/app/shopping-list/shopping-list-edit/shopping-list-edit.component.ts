import { Component, OnInit, Input, OnDestroy, ViewChild } from '@angular/core';
import { ShoppingListService } from '../shoppingList.service';
import { Ingredients } from '../../shared/ingredients.model';
import { FormControl, NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Store } from '@ngrx/store';
import * as ShoppingListActions from '../store/shopping-list.actions';
@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html',
  styleUrls: ['./shopping-list-edit.component.css']
})

export class ShoppingListEditComponent implements OnInit, OnDestroy {

@Input() ingredientsArr:any;

@ViewChild('f') slForm : NgForm

btnDisabled:boolean = true;
EditSubscription:Subscription;
editMode = false;
editedItemIndex :number;
editeditem : Ingredients;

  constructor(private ShoppingListService : ShoppingListService, private store: Store<{ShoppingList: {ingredients : Ingredients[]}}> ) { }

ngOnInit() {
  this.EditSubscription = this.ShoppingListService.startedEditing
  .subscribe((index:number)=>{
    this.editMode =true;
    this.editedItemIndex = index;
    this.editeditem = this.ShoppingListService.getIngredient(index);
    this.slForm.setValue({
      item:this.editeditem.name,
      amount : this.editeditem.amount,
    })

  });
    
  } 

  onAddItem(form:NgForm){
    this.btnDisabled=false;
    const value = form.value
    const newIngredient = new Ingredients(value.item, value.amount);
    if(this.editMode){
      this.ShoppingListService.updateIngredient(this.editedItemIndex, newIngredient);
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
  }

 

  onDeleteItems(){
    this.ShoppingListService.deleteItems(this.editedItemIndex);
   this.onClear();
  }

  ngOnDestroy(): void {
    this.EditSubscription.unsubscribe();
}
 

}

