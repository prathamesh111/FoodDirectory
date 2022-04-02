import { HTTP_INTERCEPTORS } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { AuthInterceptorService } from "./auth/auth-interceptor";
import { RecipieService } from "./recipies/recipies.service";
import { ShoppingListService } from "./shopping-list/shoppingList.service";

@NgModule({
    providers:[ShoppingListService,
        RecipieService,
        {provide:HTTP_INTERCEPTORS, useClass:AuthInterceptorService, multi:true}]
})
export class CoreModule{

}