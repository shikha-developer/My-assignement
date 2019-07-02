import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder,FormGroup, FormControl, Validators } from '@angular/forms';
import { isUserLoggedInService } from '../isUserLoggedIn.service'
import { matchingPassword } from './validators/matching-passwords.validators';


@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {
  signupform: FormGroup;

  constructor(
    private router: Router,
    private isUserLoggedInService: isUserLoggedInService,
    private formBuilder: FormBuilder
    )
   { 
     
   }

  ngOnInit() {
    this.signupform = this.formBuilder.group({
      userName: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
      confirmPassword: new FormControl('', Validators.required)
    },
      {
        validator: matchingPassword('password', 'confirmPassword')
      })
  }
  onClickSubmit(){ 
    let givenName: String = this.signupform.controls.userName.value;
    this.isUserLoggedInService.setUserloggedIn(true);
    this.router.navigate(['/dashboard', givenName]);
  }


}
