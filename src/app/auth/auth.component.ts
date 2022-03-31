import { Component } from "@angular/core";
import { NgForm } from "@angular/forms";
import { Router } from "@angular/router";
import { Observable } from "rxjs";
import { AuthService } from "./auth.service";
import {AuthResponseData} from "./auth.service"

@Component({
    'selector':'app-auth',
    'templateUrl': './auth.component.html'
})
export class AuthComponent{

    constructor(private AuthService : AuthService, private router : Router){}
    isLoginMode = true;
    isLoading:boolean = false;
    error : string =null;
    customError : string ;

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
        });

        form.reset();
    }
}