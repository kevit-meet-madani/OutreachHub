import { Component } from '@angular/core';
import { AuthService } from '../../auth.service';
import { AppRoutingModule } from "../../app-routing.module";

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
        window.location.href = "http://localhost:63290";
       }
    }
}
