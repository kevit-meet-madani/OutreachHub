import { Component } from '@angular/core';
import { AuthService } from '../../auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {

    constructor(private authservice: AuthService) {}

    logOut(){
       if(this.authservice.logOut()){
        localStorage.removeItem('token');
        localStorage.removeItem('workspace');
       }
    }
}
