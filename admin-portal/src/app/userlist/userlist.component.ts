import { Component } from '@angular/core';
import { UserService } from '../user.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrl: './userlist.component.scss'
})
export class UserlistComponent {

   constructor(private userService:UserService,private route:ActivatedRoute) {}

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
       this.userService.deleteUser(id);
   }
}
