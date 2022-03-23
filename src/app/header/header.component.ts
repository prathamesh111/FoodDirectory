import { Component, EventEmitter, Output } from "@angular/core";
import { Subject } from "rxjs";
import { Recipe } from "../recipies/recipe.model";
import { DataStorageService } from "../shared/data-shared.service";



@Component({
    selector: "app-header",
    templateUrl: './header.component.html',
})

export class HeaderComponent{
    isActionActive:boolean = false;

    newFetched = new Subject<Recipe[]>();

@Output() featureAppSelected = new EventEmitter<string>();

    constructor(private DataStorageService : DataStorageService){}

    onselect(feature : string){
        this.featureAppSelected.emit(feature);
    }

    onAction(){
        this.isActionActive= !this.isActionActive;
    }

    onSaveData(){
        this.DataStorageService.storeRecepies();
    }

    onFetch(){
        this.DataStorageService.fetchData().subscribe();
    }

}