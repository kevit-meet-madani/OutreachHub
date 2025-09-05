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


   
    
}
