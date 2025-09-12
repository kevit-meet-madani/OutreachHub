import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../user.service';

@Component({
  selector: 'app-createuser',
  templateUrl: './createuser.component.html',
  styleUrl: './createuser.component.scss'
})
export class CreateuserComponent {
      addform!:FormGroup

    constructor(private userService:UserService) {}

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
      this.userService.createUser(this.addform.value);
   }
}
