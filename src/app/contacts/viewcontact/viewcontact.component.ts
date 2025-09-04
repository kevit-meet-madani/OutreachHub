import { Component } from '@angular/core';
import { Contact } from '../data';
import { ContactService } from '../contact.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-viewcontact',
  templateUrl: './viewcontact.component.html',
  styleUrl: './viewcontact.component.scss'
})
export class ViewcontactComponent {

  constructor(private contactService:ContactService,private route:ActivatedRoute) {}

  contact!:Contact

  

  ngOnInit(){
    this.getContact();
  }

  getContact(){
    const id = this.route.snapshot.paramMap.get('id');
     this.contactService.getContact(id).subscribe({
      next:(response) => {
          if(response?._id){
            this.contact = response;
          }
      },

      error:(error) => {
        console.log("User not found",error)
      }
     });
     console.log(this.contact);
  }
}
