import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RecipeEditComponent } from './recipies/recipe-edit/recipe-edit.component';
import { RecipeStartComponent } from './recipies/recipe-start/recipe-start.component';
import { RecipieDetailsComponent } from './recipies/recipie-details/recipie-details.component';
import { RecipiesComponent } from './recipies/recipies.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';

const appRoutes: Routes = [
  {path:'', redirectTo:'/recipies' ,pathMatch : 'full'},
  {path:'recipies', component:RecipiesComponent, children:[
    {path:'', component:RecipeStartComponent},
    {path:'new', component:RecipeEditComponent},
    {path:':id', component:RecipieDetailsComponent},
    {path:':id/edit', component:RecipeEditComponent}
  ]},
  
  
  {path:'shopping-list', component:ShoppingListComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})

export class AppRoutingModule { 
  
}
