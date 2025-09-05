import { Component, Output } from '@angular/core';
import { Work, Workspace } from '../data';
import { AuthService } from '../../auth.service';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrl: './data.component.scss'
})
export class DataComponent {

    constructor(private authService:AuthService) {}

    array:Workspace[] = []
    selectedWorkspaces: string[] = [];
    @Output() workspaces:Work[]=[]

    
    ngOnInit(){
      // this.getWorkspaces();
    }
    obj!:Object
    getWorkspaces(){
      this.authService.getWorkSpaces().subscribe(res => {
        this.array = res
        console.log(this.array)
        this.workspaces = this.array[0].workspaces
      })
    }
}
