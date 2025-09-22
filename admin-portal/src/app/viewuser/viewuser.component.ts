import { Component } from '@angular/core';
import { User } from '../user';
import { UserService } from '../user.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-viewuser',
  templateUrl: './viewuser.component.html',
  styleUrl: './viewuser.component.scss'
})
export class ViewuserComponent {

  constructor(private userService:UserService,private route:ActivatedRoute,private router:Router){}
   user!:User

   ngOnInit(){
    const id = this.route.snapshot.paramMap.get('userId')!;
    console.log(id);
       this.userService.getUser(id).subscribe(res => {
        this.user = res;
       })
   }

   goBack(){

  this.router.navigate(['../../'], { relativeTo: this.route });
   }
}
