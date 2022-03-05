import { Component, OnInit } from '@angular/core';
import { Recipe } from './recipe.model';
import { RecipieService } from './recipies.service';

@Component({
  selector: 'app-recipies',
  templateUrl: './recipies.component.html',
  styleUrls: ['./recipies.component.css'],
  providers : [RecipieService]
})
export class RecipiesComponent implements OnInit {
  selectedRecipe : Recipe;

  constructor(private recipeService : RecipieService) { }

  ngOnInit(): void {
    this.recipeService.recipeSelected.subscribe(
      (recipe : Recipe) =>{
        this.selectedRecipe = recipe;
        // console.log(this.selectedRecipe);
      }
    );
  }

}
