import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AuthGuard } from "../auth/auth.guard";
import { RecipeEditComponent } from "./recipe-edit/recipe-edit.component";
import { RecipeStartComponent } from "./recipe-start/recipe-start.component";
import { RecipieDetailsComponent } from "./recipie-details/recipie-details.component";
import { RecipeResolverService } from "./recipies-resolver.service";
import { RecipiesComponent } from "./recipies.component";

const routes : Routes= [
    {path:'', component:RecipiesComponent, canActivate:[AuthGuard], children:[
        {path:'', component:RecipeStartComponent},
        {path:'new', component:RecipeEditComponent},
        {path:':id', component:RecipieDetailsComponent, resolve:[RecipeResolverService]},
        {path:':id/edit', component:RecipeEditComponent, resolve:[RecipeResolverService]}
      ]},
]

@NgModule({
    imports : [RouterModule.forChild(routes)],
    exports:[RouterModule]
})

export class RecipiesRoutingModule{

}