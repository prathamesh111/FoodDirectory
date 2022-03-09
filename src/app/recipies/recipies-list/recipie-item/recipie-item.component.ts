import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../../recipe.model';
import { RecipieService } from '../../recipies.service';

@Component({
  selector: 'app-recipie-item',
  templateUrl: './recipie-item.component.html',
  styleUrls: ['./recipie-item.component.css']
})
export class RecipieItemComponent implements OnInit {
 @Input() recipe : Recipe;
 @Input() index : number; 

 constructor( private recipeService : RecipieService) { }

  ngOnInit(): void {
  }


}
