import { Component, ElementRef, OnInit, ViewChild, Input } from '@angular/core';
import { ShoppingListService } from '../shoppingList.service';
import { Ingredients } from '../../shared/ingredients.model';
@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html',
  styleUrls: ['./shopping-list-edit.component.css']
})

export class ShoppingListEditComponent implements OnInit {
@ViewChild("nameInput") nameInput:ElementRef;
@ViewChild("amountInput") amountInput:ElementRef;

@Input() ingredientsArr:any;

  constructor(private ShoppingListService : ShoppingListService ) { }

  ngOnInit(): void {
  } 

  addIngredient(){
    const ingName = this.nameInput.nativeElement.value;
    const ingAmount = this.amountInput.nativeElement.value;
    const newIngredient = new Ingredients(ingName, ingAmount);
    this.ShoppingListService.addIngredient(newIngredient);

  }

 

}
