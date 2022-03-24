import { Injectable } from "@angular/core";
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from "@angular/router";
import { DataStorageService } from "../shared/data-shared.service";
import { Recipe } from "./recipe.model";
import { RecipieService } from "./recipies.service";

@Injectable({providedIn:"root"})

export class RecipeResolverService implements Resolve<Recipe[]>{
    constructor(private datastorageservice : DataStorageService, private RecipieService:RecipieService){}

    resolve(route:ActivatedRouteSnapshot, state: RouterStateSnapshot){
        const recepies = this.RecipieService.getRecipies();
        if(recepies.length ===0 ){
            return this.datastorageservice.fetchData();
        }
        else{
            return recepies;
        }
    }
}