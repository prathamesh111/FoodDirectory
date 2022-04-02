import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { AlertComponent } from "./alert/alert.component";
import { DropdownDirective } from "./dropdown.directive";
import { LoadingSpinner } from "./loading-spinner/loading-spinner.component";
import { PlaceHolderDirective } from "./placeholder/placeholder.directive";

@NgModule({
    declarations:[
        AlertComponent,
        PlaceHolderDirective,
        LoadingSpinner,
        DropdownDirective 
    ],
    imports:[
        CommonModule,
    ],
    exports : [
        AlertComponent,
        PlaceHolderDirective,
        LoadingSpinner,
        DropdownDirective
    ]
})
export class SharedModule{

}