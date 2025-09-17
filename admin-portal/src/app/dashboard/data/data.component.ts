import { Component, Output } from '@angular/core';
import { Workspace } from '../data';
import { AuthService } from '../../auth.service';
import { HttpClient } from '@angular/common/http';
import { WorkspaceService } from '../../workspace.service';
import { UserService } from '../../user.service';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrl: './data.component.scss'
})
export class DataComponent {

    constructor(private authService:AuthService,private workspaceService:WorkspaceService,private userService:UserService) {}

    workspaces:Workspace[]=[]
    currentpage = 1

    
    ngOnInit(){
     this.getWorkspaces();
    }
   
   getWorkspaces(){
     this.workspaceService.getWorkspaces().subscribe(works => {
        this.workspaces = works

        for(let w of this.workspaces){
         this.userService.getUsersCount(w._id).subscribe(count => {
            w["count"] = count;
            // w = w;
         })
       }
      
   })
      
   } 

   delete(id:any){
      this.workspaceService.deleteWorkspace(id);
   }

   edit(w:Workspace){
      this.workspaceService.editWorkspace(w);
   }
}
