import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const appRoutes: Routes = [
  {path:'', redirectTo:'/recipies' ,pathMatch : 'full'},
  {path:'recipies', loadChildren: ()=>import('./recipies/recipies.module').then(m=> m.RecipiesModule)},
  {path:'shopping-list', loadChildren :()=> import('./shopping-list/shoppingList.module').then(m=> m.ShoppingListModule)}
]

@NgModule({
  imports: [RouterModule.forRoot(appRoutes, {preloadingStrategy : PreloadAllModules}) ],
  exports: [RouterModule]
})

export class AppRoutingModule { 
  
}
