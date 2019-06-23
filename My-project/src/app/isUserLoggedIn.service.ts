import { Injectable } from '@angular/core';

@Injectable()

export class isUserLoggedInService{
    userLogIn = false;
    isUserLoggedIn():boolean{
        return this.userLogIn;
    }
    setUserloggedIn(value){
        this.userLogIn = value;
    }
}