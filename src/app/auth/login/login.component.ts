import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  constructor(private router:Router) {}

  loginform!:FormGroup

   isActive = false;

   ngOnInit(){
    this.loginform = new FormGroup({
      email: new FormControl('',[Validators.required]),
      password: new FormControl('',[Validators.required])
    })
  }

  OnSubmit(){
     this.router.navigate(['/dashboard']);
  }

   navigate(){
     this.isActive = !this.isActive
   }
}
