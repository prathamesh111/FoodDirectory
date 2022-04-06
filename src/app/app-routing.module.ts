import { NgModule } from '@angular/core';
<<<<<<< HEAD
import { PreloadAllModules,  RouterModule, Routes } from '@angular/router';

const appRoutes: Routes = [
  {path:'', redirectTo:'/recipies' ,pathMatch : 'full'},
  {path: 'recipies',
   loadChildren : ()=>import('./recipies/recipies.module').then(m=>{m.RecipiesModule})},
   {path:'shopping-list', loadChildren: ()=> import ('./shopping-list/shoppingList.module').then(m => m.ShoppingListModule)},
   {path: 'auth', loadChildren : ()=>import('./auth/auth.module').then(m => m.AuthModule)}
=======
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';

const appRoutes: Routes = [
  {path:'', redirectTo:'/recipies' ,pathMatch : 'full'},
  {path :'auth', component:AuthComponent}
>>>>>>> parent of 2c6300d (auth module and header link validation fix)
]

@NgModule({
  imports: [RouterModule.forRoot(appRoutes, {preloadingStrategy: PreloadAllModules})],
  exports: [RouterModule]
})

export class AppRoutingModule { 
  
}
