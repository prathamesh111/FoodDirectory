import { Injectable } from "@angular/core";
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from "@angular/router";
import { DataStorageService } from "../shared/data-shared.service";
import { Recipe } from "./recipe.model";

@Injectable({providedIn:"root"})

export class RecipeResolverService implements Resolve<Recipe[]>{
    constructor(private datastorageservice : DataStorageService){}

    resolve(route:ActivatedRouteSnapshot, state: RouterStateSnapshot){
     return this.datastorageservice.fetchData();
    }
}