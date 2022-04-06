import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { catchError, tap } from "rxjs/operators";
import  {BehaviorSubject, Subject, throwError} from 'rxjs'
import { User } from "./user.model";
import { Router } from "@angular/router";
import { environment } from "../../environments/environment";


export interface AuthResponseData {
    idToken :string,
    email	:string,
    refreshToken : string,
    expiresIn :string,
    localId :string;
    registered? :string;
}

@Injectable({'providedIn':'root'})


export class AuthService {

    user = new BehaviorSubject<User>(null);
    tokenExpirationTimer:any;

    constructor(private http :HttpClient, private router : Router){}

    signUp(email:string, password :string){
    return this.http
    .post<AuthResponseData>('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key='+environment.fireBaseApiKey, 
        {
            email:email,
            password  :password,
            returnSecureToken : true
        }
        )
        .pipe(catchError(this.handleError), 
        tap(resData => {
           this.handleAuthentication(resData.email, resData.localId, resData.idToken,+resData.expiresIn);
        })
        )

    }

    login(email : string, password : string){
     return this.http
        .post<AuthResponseData>('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key='+environment.fireBaseApiKey,
        {
            email : email,
            password:password,
            returnSecureToken :true
        }
        )
        .pipe(catchError(this.handleError),
        tap(resData => {
            this.handleAuthentication(resData.email, resData.localId, resData.idToken,+resData.expiresIn);
        })
        )
    }

    logOut(){
        this.user.next(null);
        this.router.navigate(['/auth']);
        localStorage.removeItem('userData');
        if(this.tokenExpirationTimer){
            clearTimeout(this.tokenExpirationTimer);
        }
    }

    autoLogin(){
        const userData = JSON.parse(localStorage.getItem("userData"));
        if(!userData){
            return;
        }

        const loadedUser = new User(userData.email, userData.id, userData._token, new Date(userData._tokenExpirationDate));

        if(loadedUser.token){
            this.user.next(loadedUser);
            const expirationDuration = new Date(userData._tokenExpirationDate).getTime() -  new Date().getTime();
            this.autoLogout(expirationDuration);
        }
    }

    autoLogout(expiration:number ){
       this.tokenExpirationTimer = setTimeout(() => {
            this.logOut();
        }, expiration);
    }

    private handleError(errorRes:HttpErrorResponse){
        let errorMessage = "default error";
        if(!errorRes.error || !errorRes.error.error){
            return throwError(errorRes)
        }
        switch(errorRes.error.error.message){
            case 'EMAIL_EXISTS' :
                errorMessage = 'this email already existt';
            break;
            case 'EMAIL_NOT_FOUND':
                errorMessage = 'Email id not in DB';
            break;
            case 'INVALID_PASSWORD' : 
                errorMessage =' invalid password';
            break;
            case 'USER_DISABLED':
                    errorMessage = 'user disabled'
        }
        return throwError(errorMessage);
    }

    private handleAuthentication(email :string,userId :string, token:string ,expiresIn : number ){
        const expirationDate = new Date(new Date().getTime() +  +expiresIn*1000)
        const user =  new User(email, userId, token, expirationDate );
        this.user.next(user);
        this.autoLogout(expiresIn*1000);
        localStorage.setItem('userData' , JSON.stringify(user))

    }
}