import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule} from "@angular/forms";
import { ShoppingListEditComponent } from "./shopping-list-edit/shopping-list-edit.component";
import { ShoppingListComponent } from "./shopping-list.component";
import { ShoppingListRoutingModule } from "./shoppingList-routing.module";

@NgModule({
declarations : [
    ShoppingListComponent,
    ShoppingListEditComponent
],
imports : [
    FormsModule,
    CommonModule,
    ShoppingListRoutingModule,
]
})

export class ShoppingListModule{

}