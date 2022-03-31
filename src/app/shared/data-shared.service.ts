import { Injectable } from "@angular/core";
import { HttpClient, HttpParams } from "@angular/common/http";
import { Recipe } from "../recipies/recipe.model";
import { RecipieService } from "../recipies/recipies.service";
import {map, tap} from 'rxjs/operators';
import { AuthService } from "../auth/auth.service";
@Injectable({providedIn:"root"})
export class DataStorageService{
    constructor(private HttpClient : HttpClient, private recepiService : RecipieService , private authService : AuthService){
    }

    storeRecepies(){
      const recepies=  this.recepiService.getRecipies();
      this.HttpClient.put('https://foodie-app-c2cd1-default-rtdb.firebaseio.com/recepies.json', recepies).subscribe((response)=>{
        console.log(response);
      })
    }

    fetchData(){
      // just subscribe it once when clicked fetchdata and then done. can also be done by calling unsubscribe immediately
      // this.authService.user.pipe(take(1)).subscribe(user => { });
      
      // we are creating 2 observables at a time so we are piping both of them together by using exhaustmap 
        return this.HttpClient.
        get<Recipe[]>('https://foodie-app-c2cd1-default-rtdb.firebaseio.com/recepies.json',
      )
      .pipe(
        map(recipies => {
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
      );
     
    }
}