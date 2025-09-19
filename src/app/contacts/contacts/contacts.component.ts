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
     page = 1;
     limit = 15;
     totalPages = 0;
     total!:number;

    user!:string[]
    getpermisson():string[]{
      return this.contactService.getPermisson();
    }

    ngOnInit(){
       this.getContacts(1)
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

  getContacts(page:number){
     
     this.contactService.getContacts(page,this.limit,localStorage.getItem('workspace')!).subscribe(response => {
       this.contacts = response.data
       this.total = response.total
       this.totalPages = response.totalPages
     })
  }

  deleteContact(id:any){
     this.contactService.deleteContact(id).subscribe({
      next: (response) => {
        this.getContacts(this.page);
      }
     });
  }

  nextPage() {
    if (this.page < this.totalPages) {
      this.page++;
      this.getContacts(this.page);
    }
  }

  prevPage() {
    if (this.page > 1) {
      this.page--;
      this.getContacts(this.page);
    }
  }
}
