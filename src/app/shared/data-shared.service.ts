import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Recipe } from "../recipies/recipe.model";
import { RecipieService } from "../recipies/recipies.service";
import {map, tap} from 'rxjs/operators';
@Injectable({providedIn:"root"})
export class DataStorageService{
    constructor(private HttpClient : HttpClient, private recepiService : RecipieService ){

    }

    storeRecepies(){
      const recepies=  this.recepiService.getRecipies();
      this.HttpClient.put('https://foodie-app-c2cd1-default-rtdb.firebaseio.com/recepies.json', recepies).subscribe((response)=>{
        console.log(response);
      })
    }

    fetchData(){
      return this.HttpClient.
        get<Recipe[]>('https://foodie-app-c2cd1-default-rtdb.firebaseio.com/recepies.json')
        .pipe(map(recipies => {
          return recipies.map(
            recipe =>{
              return {...recipe, ingredients : recipe.ingredients ? recipe.ingredients : []};
            }
          );
        }),
        tap(recipies => {
          this.recepiService.setRecipies(recipies);
        }
        )
       )
    }
}