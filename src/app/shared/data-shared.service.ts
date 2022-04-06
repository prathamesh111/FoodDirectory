import { Injectable } from "@angular/core";
import { HttpClient, HttpParams } from "@angular/common/http";
import { Recipe } from "../recipies/recipe.model";
import { RecipieService } from "../recipies/recipies.service";
import {map} from 'rxjs/operators';
import { AuthService } from "../auth/auth.service";
@Injectable({providedIn:"root"})
export class DataStorageService{
    constructor(private HttpClient : HttpClient, private recepiService : RecipieService , private authService : AuthService){
    }

    storeRecepies(){
      const recepies=  this.recepiService.getRecipies();
      this.HttpClient.put('https://foodie-app-c2cd1-default-rtdb.firebaseio.com/recepies.json', recepies).subscribe((response)=>{
        // console.log(response);
      })
    }

    fetchData(){
        this.HttpClient.
        get<Recipe[]>('https://foodie-app-c2cd1-default-rtdb.firebaseio.com/recepies.json')
        .pipe(map(recipies => {
          console.log(recipies + "IP");
          return recipies.map(
            recipe =>{
              return {...recipe, ingredients : recipe.ingredients ? recipe.ingredients : []};
            }
          );
        }))
        .subscribe(response =>{
            this.recepiService.setRecipies(response);
        })
    }
}