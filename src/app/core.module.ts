import { HTTP_INTERCEPTORS } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { AuthInterceptorService } from "./auth/auth-interceptor";
import { RecipieService } from "./recipies/recipies.service";

@NgModule({
    providers:[
        RecipieService,
        {provide:HTTP_INTERCEPTORS, useClass:AuthInterceptorService, multi:true}]
})
export class CoreModule{

}