import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms'
import { Router } from '@angular/router';
import { isUserLoggedInService } from '../isUserLoggedIn.service'


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {


  defaultName: String = "shikha";
  defaultPass: String = "test@1234";
  myform: FormGroup;
  constructor(
    private router: Router,
    private isUserLoggedInService: isUserLoggedInService,
    private formBuilder: FormBuilder) {
  }


  ngOnInit() {
    this.myform = this.formBuilder.group({
      userName: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required)
    })
  }


  onClickSubmit() {
    let givenName: String = this.myform.controls.userName.value;
    let givenPassword: String = this.myform.controls.password.value
    if (givenName == this.defaultName && givenPassword == this.defaultPass) {
      this.isUserLoggedInService.setUserloggedIn(true);
      this.router.navigate(['/dashboard', givenName]);
    }
    else {
      alert("Please enter valid credential");
    }
  }
  onClickSignUp(){
    this.router.navigate(['/signup']);
  }
}
