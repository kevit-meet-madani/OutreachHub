import { Component, Input } from '@angular/core';
import { Contact } from '../data';
import { ContactService } from '../contact.service';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrl: './contacts.component.scss'
})
export class ContactsComponent {

   
    constructor(private contactService:ContactService,private router:Router) {}
    @Input() contact!:Contact

    contacts: Contact[] = []
    selectedSort = 'name';

    ngOnInit(){
       this.getContacts()
    }

    onAddContact() {
    // Implement modal open or router navigation
       
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

  editContact(contact:Contact){

  }

  deleteContact(contact:Contact){

  }
}
