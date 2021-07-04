import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/shared/authentication.service';

@Component({
  selector: 'app-signup-screen',
  templateUrl: './signup-screen.component.html',
  styleUrls: ['./signup-screen.component.css']
})
export class SignupScreenComponent implements OnInit {

  loginForm = new FormGroup({
    name : new FormControl('', [Validators.required]),
    password: new FormControl('',[Validators.required]),
    email: new FormControl('',[Validators.required,Validators.email])
  })
  isLoeaded = true
  constructor(private authenticationService:AuthenticationService,private router:Router) { }

  ngOnInit(): void {
  }

  onFormSubmit(){
    if(this.loginForm.invalid)
      return
    this.isLoeaded = false
    console.log(this.loginForm.value)
    this.authenticationService.signUp(this.loginForm.value).subscribe(
      result => {
        this.isLoeaded = true
        this.router.navigate([''])
      },error => {
        this.isLoeaded = true
      }
    )
  }

  get username() { return this.loginForm.get('name') }
  get password() { return this.loginForm.get('password') }
  get email() { return this.loginForm.get('email') }

}
