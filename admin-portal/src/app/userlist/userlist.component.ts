import { Component } from '@angular/core';
import { UserService } from '../user.service';
import { ActivatedRoute, Route, Router } from '@angular/router';

@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrl: './userlist.component.scss'
})
export class UserlistComponent {

   constructor(private userService:UserService,private route:ActivatedRoute,private router:Router) {}

   users:any[] = []
   currentpage = 1
   
   ngOnInit(){
      const id = this.route.snapshot.paramMap.get('id')!;
      localStorage.setItem('workspace',id);
      this.userService.getUsers(id).subscribe(res => {
        this.users = res;
        console.log(res);
      })
   }

   delete(id:any){
       this.userService.deleteUser(id).subscribe(res => {
        this.userService.getUsers(id).subscribe(res => {
        this.users = res;
        console.log(res);
      })
       })
       
   }

   // user-list.component.ts
editUser(userId: string) {

  this.router.navigate([userId,'edit'], {
    relativeTo: this.route  // stays inside workspace/:workspaceId
  });
}

viewuser(userId:string){

  this.router.navigate([userId,'view'], {
    relativeTo: this.route  // stays inside workspace/:workspaceId
  });
}

goBack(){

  this.router.navigate(['../../'], { relativeTo: this.route });
}

existUsers(){
  const id = this.route.snapshot.paramMap.get('id')!;
  this.router.navigate(['dashboard',id,'users','exist']), {
    relativeTo: this.route  // stays inside workspace/:workspaceId
  };
}

createtUser(){
  const id = this.route.snapshot.paramMap.get('id')!;
  this.router.navigate(['dashboard',id,'users','create']), {
    relativeTo: this.route  // stays inside workspace/:workspaceId
  };
}


}
