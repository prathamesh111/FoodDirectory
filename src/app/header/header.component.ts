import { Component, EventEmitter, Output } from "@angular/core";



@Component({
    selector: "app-header",
    templateUrl: './header.component.html',
})

export class HeaderComponent{
    isActionActive:boolean = false;

@Output() featureAppSelected = new EventEmitter<string>();

    onselect(feature : string){
        this.featureAppSelected.emit(feature);
    }

    onAction(){
        this.isActionActive=true;
    }

}