import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { WorkspaceService } from '../workspace.service';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-edituser',
  templateUrl: './edituser.component.html',
  styleUrl: './edituser.component.scss'
})
export class EdituserComponent {
    
    
      userForm!: FormGroup;
    
      constructor(private fb: FormBuilder , private workspaceService:WorkspaceService,private roue:ActivatedRoute,private userService:UserService,private router: Router,private route:ActivatedRoute) {}
    
      ngOnInit(): void {
        this.userForm = this.fb.group({
          name: new FormControl('',[Validators.required]),
          email:new FormControl('',[Validators.required]),
          right:new FormControl('',Validators.required)
        });
      }
    
      onSubmit() {
        const obj = this.userForm.value;
        obj["id"] = this.roue.snapshot.paramMap.get('id');
        this.userService.updateUser(obj).subscribe({
          next: (response) => {
             console.log(response);
          },
          error: (error) => {
            console.log(error);
          }
        })
      }

      // edit-user.component.ts
goBack() {
  this.router.navigate(['../../'], { relativeTo: this.route });
}

}
