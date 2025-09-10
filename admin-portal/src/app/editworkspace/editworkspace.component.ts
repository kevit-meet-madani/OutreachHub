import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { WorkspaceService } from '../workspace.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-workspace-update',
  templateUrl: './editworkspace.component.html',
  styleUrls: ['./editworkspace.component.scss']
})
export class WorkspaceUpdateComponent implements OnInit {


  @Input() workspaceData: { name: string; summary: string } | null = null;
  @Output() formSubmit = new EventEmitter<{ name: string; summary: string }>();

  workspaceForm!: FormGroup;

  constructor(private fb: FormBuilder , private workspaceService:WorkspaceService,private roue:ActivatedRoute) {}

  ngOnInit(): void {
    this.workspaceForm = this.fb.group({
      name: [this.workspaceData?.name || '', [Validators.required, Validators.minLength(3)]],
      summary: [this.workspaceData?.summary || '', Validators.required]
    });
  }

  onSubmit() {
    const obj = this.workspaceForm.value;
    obj["id"] = this.roue.snapshot.paramMap.get('id');
    this.workspaceService.editWorkspace(obj);
  }
}
