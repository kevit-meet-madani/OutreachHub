import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { WorkspaceService } from '../workspace.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-createworkspace',
  templateUrl: './createworkspace.component.html',
  styleUrl: './createworkspace.component.scss'
})
export class CreateworkspaceComponent {

  constructor(private workspaceService:WorkspaceService,private router:Router,private route:ActivatedRoute) {}
   addform!:FormGroup

   ngOnInit(){
     this.addform = new FormGroup({
      name:new FormControl('',[Validators.required]),
      summary:new FormControl('',[Validators.required])
     })
   }

   OnSubmit(){
     this.workspaceService.createWorkspace(this.addform.value);
   }

   goBack(){
      this.router.navigate(['../../'], { relativeTo: this.route });
   }
      
}
