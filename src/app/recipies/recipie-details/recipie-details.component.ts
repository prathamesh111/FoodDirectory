import { Component, OnInit,} from '@angular/core';
import { ActivatedRoute ,Params, Router} from '@angular/router';
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
  id:number;
  recipe : Recipe;

  constructor(private RecipieService : RecipieService, private route : ActivatedRoute, private router : Router) {
    this.cities = [
      {name: 'To shopping List', code: 'NY'},
      {name: 'Edit Recipe', code: 'RM'},
      {name: 'Delete Recipe', code: 'LDN'},
    ];
   }

   ngOnInit() {
    this.route.params
    .subscribe(
      (params : Params) => {
        this.id = +params['id'];
        this.recipe = this.RecipieService.getRecipe(this.id);
      }
    );
  }

   addToShoppingList(){
     this.RecipieService.addingredToShopList(this.recipe.ingredients);
   }


  gotoEdit(){
    this.router.navigate(['edit'], {relativeTo:this.route});
  }

  deleteRecipe(){
    this.RecipieService.deleteRecipe(this.id);
    this.router.navigate(['/recipies']);
  }

}
