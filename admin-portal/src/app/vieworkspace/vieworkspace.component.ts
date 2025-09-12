import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Workspace } from '../dashboard/data';
import { ActivatedRoute } from '@angular/router';
import { WorkspaceService } from '../workspace.service';

@Component({
  selector: 'app-vieworkspace',
  templateUrl: './vieworkspace.component.html',
  styleUrl: './vieworkspace.component.scss'
})
export class VieworkspaceComponent {

  constructor(private route : ActivatedRoute,private workspaceService:WorkspaceService) {}

   workspaceForm!:FormGroup
   w!:Workspace

   ngOnInit(){
    const id = this.route.snapshot.paramMap.get('id');
    this.workspaceService.getWorkspaceById(id).subscribe(res => {
      this.w = res;
    })
   }
}
