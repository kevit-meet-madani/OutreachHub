import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Work, Workspace } from '../data';
import { AuthService } from '../../auth.service';


@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss']
})
export class DropdownComponent {
   constructor(private authService:AuthService) {}


      placeholder = "Select a workspace"
      selectedValue!:string ;
      array:Workspace[] = []
      selectedWorkspaces: string[] = [];
      // workspaces:Work[]=[]
      workspaces:Workspace[]=[]
  
      ngOnInit(){
        this.getWorkspaces();
      }
      obj!:Object
      getWorkspaces(){
        this.authService.getWorkSpaces().subscribe(res => {
          // this.workspaces = res[0].workspaces
        
        this.workspaces = res
        console.log(res);
      })
    }

      getVal(){
         localStorage.setItem('workspace',this.selectedValue);
      }
}
