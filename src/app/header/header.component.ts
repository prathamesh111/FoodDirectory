import { Component, EventEmitter, Output, OnInit, OnDestroy } from "@angular/core";
import { Subject, Subscription } from "rxjs";
import { AuthService } from "../auth/auth.service";
import { Recipe } from "../recipies/recipe.model";
import { DataStorageService } from "../shared/data-shared.service";



@Component({
    selector: "app-header",
    templateUrl: './header.component.html',
})

export class HeaderComponent implements OnInit, OnDestroy{
    isActionActive:boolean = false;
    isAuthenticated : boolean= false;
    newFetched = new Subject<Recipe[]>();
    private userSub : Subscription;
    @Output() featureAppSelected = new EventEmitter<string>();
    constructor(private DataStorageService : DataStorageService, private  authService : AuthService){}

    ngOnInit(){
      this.userSub=  this.authService.user.subscribe(userData =>{
        this.isAuthenticated = !userData ? false : true;
        });
    }

   

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

    onLogOut(){
        this.authService.logOut();
    }

    ngOnDestroy(){
        this.userSub.unsubscribe();
    }

}