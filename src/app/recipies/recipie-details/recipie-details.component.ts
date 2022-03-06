import { Component, Input, OnInit, EventEmitter } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipieService } from '../recipies.service';

@Component({
  selector: 'app-recipie-details',
  templateUrl: './recipie-details.component.html',
  styleUrls: ['./recipie-details.component.css']
})

export class RecipieDetailsComponent implements OnInit {
  name='';
  cities = [];

  @Input() recipe : Recipe;

  constructor(private RecipieService : RecipieService) {
    this.cities = [
      {name: 'To shopping List', code: 'NY'},
      {name: 'Edit Recipe', code: 'RM'},
      {name: 'Delete Recipe', code: 'LDN'},
    ];
   }

   addToShoppingList(){
     this.RecipieService.addingredToShopList(this.recipe.ingredients);
   }
   

  ngOnInit() {

  }

}
