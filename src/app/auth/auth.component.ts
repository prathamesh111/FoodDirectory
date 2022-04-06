import { Component, ComponentFactoryResolver, OnDestroy, ViewChild } from "@angular/core";
import { NgForm } from "@angular/forms";
import { Router } from "@angular/router";
import { Observable, Subscription } from "rxjs";
import { AuthService } from "./auth.service";
import {AuthResponseData} from "./auth.service"
import { PlaceHolderDirective } from "../shared/placeholder/placeholder.directive";
@Component({
    'selector':'app-auth',
    'templateUrl': './auth.component.html'
})
export class AuthComponent implements OnDestroy{

    constructor(private AuthService : AuthService, private router : Router, private componentFactoryResolver : ComponentFactoryResolver){}
    isLoginMode = true;
    isLoading:boolean = false;
    error : string =null;
    customError : string ;

    private closedSub : Subscription;
    @ViewChild(PlaceHolderDirective) alertHost : PlaceHolderDirective;

    onSwitchMode(){
      this.isLoginMode = !this.isLoginMode;
    }


    onSubmit(form : NgForm){
        if(!form.valid){
            return
        }
        const email = form.value.email;
        const password = form.value.password;
        this.isLoading = true;

        let authObs : Observable<AuthResponseData>;
        if(this.isLoginMode){
            authObs =  this.AuthService.login(email, password)
        }
        else
        {
            authObs= this.AuthService.signUp(email,password)
        }

        authObs.subscribe(resData =>{
            this.isLoading = false;
            this.router.navigate(['/recipies']);
        }, errorMessage => {
            this.error = errorMessage;     
            this.isLoading = false;
            this.showError(errorMessage);
        });

        form.reset();
    }

    closeModal(){
        this.error = null;
    }

    showError(message : string){
      const alertCmpFactory=      this.componentFactoryResolver.resolveComponentFactory(AlertComponent);
      const HostviewContainerRef = this.alertHost.viewContainerRef;
      HostviewContainerRef.clear();
        const compRef =  HostviewContainerRef.createComponent(alertCmpFactory);
        compRef.instance.message = message;
        this.closedSub =  compRef.instance.closed.subscribe(()=>{
           this.closedSub.unsubscribe();
           HostviewContainerRef.clear();
        })

    }

    ngOnDestroy(): void {
        if(this.closedSub){
            this.closedSub.unsubscribe();
        }
    }
}