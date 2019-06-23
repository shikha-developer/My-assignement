import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators  } from '@angular/forms'
import { Router } from '@angular/router';
import { isUserLoggedInService } from '../isUserLoggedIn.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  defaultName = "shikha";
  defaultPass = "test@1234";
  constructor(private router: Router,private isUserLoggedInService: isUserLoggedInService) { }
  
  ngOnInit(){

  }
    myform = new FormGroup({
    userName: new FormControl('', Validators.required),
    password: new FormControl( '',Validators.required)
  })
  onClickSubmit() {
    console.log(this.myform.controls.userName.value);
    let givenName :string = this.myform.controls.userName.value;
    let givenPassword: string =this.myform.controls.password.value
    if(givenName == this.defaultName &&  givenPassword == this.defaultPass){
      this.isUserLoggedInService.setUserloggedIn(true);
      this.router.navigate(['/dashboard']);
    }
  }
}
