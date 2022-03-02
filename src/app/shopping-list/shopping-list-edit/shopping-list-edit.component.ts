import { Component, ElementRef, OnInit, ViewChild, EventEmitter, Output, Input } from '@angular/core';
import { Ingredients } from '../../shared/ingredients.model';
@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html',
  styleUrls: ['./shopping-list-edit.component.css']
})

export class ShoppingListEditComponent implements OnInit {
@ViewChild("nameInput") nameInput:ElementRef;
@ViewChild("amountInput") amountInput:ElementRef;

@Output() shoppingData:any = new EventEmitter<{Ingredients:any}>();
@Input() ingredientsArr:any;

  constructor() { }

  ngOnInit(): void {
  } 

  addIngredient(){
    const ingName = this.nameInput.nativeElement.value;
    const ingAmount = this.amountInput.nativeElement.value;
    const newIngredient = new Ingredients(ingName, ingAmount);
    this.shoppingData.emit(newIngredient);
  }

  deleteIngredients(){
    this.ingredientsArr.pop();
  }

}
