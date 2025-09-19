import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Work, Workspace } from '../data';
import { AuthService } from '../../auth.service';
import { SharedService } from '../../shared.service';


@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss']
})
export class DropdownComponent {
   constructor(private authService:AuthService,private sharedService:SharedService) {}


      placeholder = "Select a workspace"
      selectedValue!:string ;
      array:Workspace[] = []
      selectedWorkspaces: string[] = [];
      // workspaces:Work[]=[]
      workspaces:Workspace[]=[]

      
  
      ngOnInit(){
        this.getWorkspaces();
        if(localStorage.getItem('workspace')){
          this.selectedValue = localStorage.getItem('workspace')!;
        }
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
         this.sharedService.emitEvent(this.selectedValue);
      }
}
