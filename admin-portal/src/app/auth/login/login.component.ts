import { Component } from '@angular/core';
import { FormControl , FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  constructor(private router:Router,private authService:AuthService) {}

  loginform!:FormGroup

   isActive = false;

   ngOnInit(){
    this.loginform = new FormGroup({
      email: new FormControl('',[Validators.required]),
      password: new FormControl('',[Validators.required])
    })
  }

  OnSubmit(){
    console.log(this.loginform.value);
     this.authService.login(this.loginform.value).subscribe( (yes) => {
      console.log(yes);
      if(yes){
        this.router.navigate(['/dashboard']);
      }
      })
     }

   navigate(){
     this.isActive = !this.isActive
   }
}
