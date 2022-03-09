import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Recipe } from '../recipe.model';
import { RecipieService } from '../recipies.service';

@Component({
  selector: 'app-recipies-list',
  templateUrl: './recipies-list.component.html',
  styleUrls: ['./recipies-list.component.css']
})
export class RecipiesListComponent implements OnInit {

  recipies : Recipe[] ;
  constructor( private recipeService : RecipieService,
    private router : Router,
    private route: ActivatedRoute
    ) { }




  ngOnInit() {
   this.recipies= this.recipeService.getRecipies();
  //  console.log(this.recipies);
  }

  onNewRecipe(){
    this.router.navigate(['new'], {relativeTo : this.route});

  }

}
