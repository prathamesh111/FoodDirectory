import { CommonModule } from '@angular/common';
import {NgModule} from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { RecipeEditComponent } from './recipe-edit/recipe-edit.component';
import { RecipeStartComponent } from './recipe-start/recipe-start.component';
import { RecipieDetailsComponent } from './recipie-details/recipie-details.component';
import { RecipieItemComponent } from './recipies-list/recipie-item/recipie-item.component';
import { RecipiesListComponent } from './recipies-list/recipies-list.component';
import { RecipiesRoutingModule } from './recipies-routing.module';
import { RecipiesComponent } from './recipies.component';
@NgModule({
    declarations:[
        RecipiesComponent,
        RecipiesListComponent,
        RecipieItemComponent,
        RecipieDetailsComponent,
        RecipeStartComponent,
        RecipeEditComponent,
    ],
    imports : [
        RouterModule,
        CommonModule,
        ReactiveFormsModule,
        RecipiesRoutingModule
    ]
})
export class RecipiesModule{

}