import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import {InputTextModule} from 'primeng/inputtext';
import {ButtonModule} from 'primeng/button';
import {DropdownModule} from 'primeng/dropdown';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
<<<<<<< HEAD
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from './shared/shared.module';
import { CoreModule } from './core.module';
=======
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ShoppingListService } from './shopping-list/shoppingList.service';
import { RecipieService } from './recipies/recipies.service';
import {AuthComponent} from './auth/auth.component';
import { AuthInterceptorService } from './auth/auth-interceptor';
import { RecipiesModule } from './recipies/recipies.module';
import { ShoppingListModule } from './shopping-list/shoppingList.module';
import { SharedModule } from './shared/shared.module';
>>>>>>> parent of 2c6300d (auth module and header link validation fix)


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AuthComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ButtonModule,
    InputTextModule,
    DropdownModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule,
<<<<<<< HEAD
    SharedModule,
    CoreModule,
=======
    RecipiesModule,
    ShoppingListModule,
    SharedModule
>>>>>>> parent of 2c6300d (auth module and header link validation fix)
  ],
  providers: [ShoppingListService,RecipieService, {provide:HTTP_INTERCEPTORS, useClass:AuthInterceptorService, multi:true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
