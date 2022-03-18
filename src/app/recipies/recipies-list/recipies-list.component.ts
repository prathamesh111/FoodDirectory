import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Recipe } from '../recipe.model';
import { RecipieService } from '../recipies.service';

@Component({
  selector: 'app-recipies-list',
  templateUrl: './recipies-list.component.html',
  styleUrls: ['./recipies-list.component.css']
})
export class RecipiesListComponent implements OnInit, OnDestroy {

  recipies : Recipe[] ;
  recipeChangedSubs : Subscription;
  constructor( private recipeService : RecipieService,
    private router : Router,
    private route: ActivatedRoute
    ) { }




  ngOnInit() {
    this.recipeChangedSubs= this.recipeService.recepiesChanged.subscribe((recepie :Recipe[])=>{
      this.recipies = recepie;
    });
   this.recipies= this.recipeService.getRecipies();
  }

  onNewRecipe(){
    this.router.navigate(['new'], {relativeTo : this.route});

  }

  ngOnDestroy(): void {
      this.recipeChangedSubs.unsubscribe();
  }

  

}
