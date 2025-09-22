// src/app/components/user-select/user-select.component.ts
import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { UserService } from '../user.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-user-select',
  templateUrl: './existuser.component.html',
  styleUrls: ['./existuser.component.scss']
})
export class ExistuserComponent implements OnInit {

  constructor(private userService:UserService,private router:Router,private route:ActivatedRoute) {}

  users: User[] = []; // Simulate fetching users
  selectedUserIds: Set<string> = new Set();
  currentpage = 1

  ngOnInit(): void {
    // Simulate fetched user list
    this.userService.getToggledUsers(localStorage.getItem('workspace')).subscribe(res => {
      this.users = res;
    })
  }

  toggleSelection(userId: string, event: Event): void {
  const isChecked = (<HTMLInputElement>event.target).checked;
  // or:
  // const isChecked = (event.target as HTMLInputElement).checked;

  if (isChecked) {
    this.selectedUserIds.add(userId);
  } else {
    this.selectedUserIds.delete(userId);
  }
}


  submitSelection(): void {
    const selectedUsers = this.users.filter(user => this.selectedUserIds.has(user._id));
    console.log('Selected Users:', selectedUsers);
    
    this.userService.updateWorkspaceUsers(localStorage.getItem('workspace'),selectedUsers).subscribe({
      next: (response) => {
        console.log(response);
      },

      error: (error) => {
        console.log(error);
      }
    });
  }

  goBack(){
      this.router.navigate(['../'], { relativeTo: this.route });
   }
}
