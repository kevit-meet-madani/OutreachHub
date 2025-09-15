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
    currentPage = 1;

    user!:string[]
    getpermisson():string[]{
      return this.contactService.getPermisson();
    }

    ngOnInit(){
       this.getContacts()
       this.user = this.getpermisson()
    }

    call(id:any):boolean{
      console.log(this.user +" "+ id._id)

      if(this.user[0] === "edit"){
        if(this.user[1] === id._id){
            return false;
        }
      }
      return true; 
    }

    onSortChange(event: any) {
       const sortBy = event.target.value;
       console.log('Sort by:', sortBy);
       // Implement sorting logic here
      }

  getContacts(){
     
     this.contactService.getContacts(localStorage.getItem('workspace')!).subscribe(contacts => {
       this.contacts = contacts
       console.log(this.contacts);
     })
  }

  deleteContact(id:any){
     this.contactService.deleteContact(id);
  }
}
