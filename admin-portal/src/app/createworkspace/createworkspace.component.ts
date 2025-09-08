import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { WorkspaceService } from '../workspace.service';

@Component({
  selector: 'app-createworkspace',
  templateUrl: './createworkspace.component.html',
  styleUrl: './createworkspace.component.scss'
})
export class CreateworkspaceComponent {

  constructor(private workspaceService:WorkspaceService) {}
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
      
}
