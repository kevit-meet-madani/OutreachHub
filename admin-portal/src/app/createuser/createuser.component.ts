import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../user.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-createuser',
  templateUrl: './createuser.component.html',
  styleUrl: './createuser.component.scss'
})
export class CreateuserComponent {
      addform!:FormGroup
      selected: string = '';
    constructor(private userService:UserService,private router:Router,private route:ActivatedRoute) {}

   ngOnInit(){
      this.addform = new FormGroup({
        name:new FormControl('',[Validators.required]),
        email: new FormControl('',[Validators.required]),
        password:new FormControl('',[Validators.required]),
        right:new FormControl('',[Validators.required])
      })
   }

   OnSubmit(){
      console.log(this.addform.value);
      const obj = this.addform.value;
      obj["workspaces"] = [localStorage.getItem('workspace')];
      obj["role"] = "user";
      console.log(obj)
      this.userService.createUser(this.addform.value);
   }

   goBack(){
      this.router.navigate(['../'], { relativeTo: this.route });
   }
}
