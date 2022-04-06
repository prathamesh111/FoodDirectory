import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';

const appRoutes: Routes = [
  {path:'', redirectTo:'/recipies' ,pathMatch : 'full'},
  {path: 'recipies',
   loadChildren : ()=>import('./recipies/recipies.module').then(m=>{m.RecipiesModule})},
   {path:'shopping-list', loadChildren: ()=> import ('./shopping-list/shoppingList.module').then(m => m.ShoppingListModule)},
   {path: 'auth', loadChildren : ()=>import('./auth/auth.module').then(m => m.AuthModule)}
]

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})

export class AppRoutingModule { 
  
}
