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
      workspaces:Work[]=[]
  
      ngOnInit(){
        this.getWorkspaces();
      }
      obj!:Object
      getWorkspaces(){
        this.authService.getWorkSpaces().subscribe(res => {
        //   this.array = res
        //   console.log(this.array)
        //   this.workspaces = this.array[0].workspaces
        // })
        this.workspaces = res
      })
    }

      getVal(){
         localStorage.setItem('workspace',this.selectedValue);
      }
}
