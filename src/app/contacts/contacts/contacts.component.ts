import { Component, Input } from '@angular/core';
import { Contact } from '../data';
import { ContactService } from '../contact.service';
import { Router } from '@angular/router';



 // For UI use only

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrl: './contacts.component.scss'
})
export class ContactsComponent {

   
    constructor(private contactService:ContactService,private router:Router) {}
    // @Input() contact!:Contact

    contacts: Contact[] = []
    selectedSort = 'name';
    permisson:boolean = this.contactService.getPermisson();

    ngOnInit(){
       this.getContacts()
    }

    onSortChange(event: any) {
       const sortBy = event.target.value;
       console.log('Sort by:', sortBy);
       // Implement sorting logic here
      }

  getContacts(){
     
     this.contactService.getContacts().subscribe(contacts => {
       this.contacts = contacts
     })
  }

  deleteContact(id:any){
     this.contactService.deleteContact(id);
  }
}
