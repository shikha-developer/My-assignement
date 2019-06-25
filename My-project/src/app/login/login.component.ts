import { Component, OnInit, ElementRef } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder  } from '@angular/forms'
import { Router } from '@angular/router';
import { isUserLoggedInService } from '../isUserLoggedIn.service'
import { interval, Observable } from 'rxjs';
import { take, map } from 'rxjs/operators';
import {fromEvent} from 'rxjs';
import { matchingPassword } from './validators/matching-passwords.validators';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {


  defaultName : string= "shikha";
  defaultPass : string= "test@1234";
   myform : FormGroup;
  constructor(private elementRef: ElementRef,
    private router: Router,
    private isUserLoggedInService: isUserLoggedInService,
    private formBuilder: FormBuilder)
     {
    
     }  
  

  ngOnInit(){
    this.myform = this.formBuilder.group({
      userName: new FormControl('', Validators.required),
      password: new FormControl( '',Validators.required),
      confirmPassword: new FormControl('',Validators.required)
    },
    {
      validator: matchingPassword('password', 'confirmPassword')
    })
     
  // const number = interval(1000);
  //  // .subscribe(value => 
 
  // let c=number.pipe(take(3),map(((x,i)=>"jswd")) );
  // c.subscribe(x=>console.log("sh"+x) );
  //   // .pipe(
  //   //   take(3),type

  //   // )
  //   fromEvent(this.elementRef.nativeElement,"click").subscribe(value => console.log(value)) 
  }
  passwordMatch(password : FormControl,passwordMatch : FormControl){
    if(password.value === passwordMatch.value){
      passwordMatch.setErrors(null); 
    }
    else{
      passwordMatch.setErrors({passwordMustMatch:true}); 
    }
  }
  
  onClickSubmit(event) {
   

    console.log(this.myform.controls.userName);
    let givenName :string = this.myform.controls.userName.value;
    let givenPassword: string =this.myform.controls.password.value
    if(givenName == this.defaultName &&  givenPassword == this.defaultPass){
      this.isUserLoggedInService.setUserloggedIn(true);
      this.router.navigate(['/dashboard',givenName]);
    }
    else{
      alert("Please enter valid credential");
    }
  }
}
