import { Component, Output } from '@angular/core';
import { Workspace } from '../data';
import { AuthService } from '../../auth.service';
import { HttpClient } from '@angular/common/http';
import { WorkspaceService } from '../../workspace.service';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrl: './data.component.scss'
})
export class DataComponent {

    constructor(private authService:AuthService,private workspaceService:WorkspaceService) {}

    workspaces:Workspace[]=[]

    
    ngOnInit(){
     this.getWorkspaces();
       
    }
   
   getWorkspaces(){
     this.workspaceService.getWorkspaces().subscribe(works => {
        this.workspaces = works
        console.log(this.workspaces);
       })
   } 

   delete(id:any){
      this.workspaceService.deleteWorkspace(id);
   }
}
