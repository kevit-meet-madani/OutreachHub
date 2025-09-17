import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ContactService } from '../contact.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addcontact',
  templateUrl: './addcontact.component.html',
  styleUrl: './addcontact.component.scss'
})
export class AddcontactComponent {

   constructor(private contactService:ContactService,private router:Router) {}

   addform!:FormGroup

   ngOnInit(){
      this.addform = new FormGroup({
        name:new FormControl('',[Validators.required]),
        phoneNumber: new FormControl('',[Validators.required]),
        tags:new FormControl('',[Validators.required])
      })
   }

   OnSubmit(){
      const tags = this.addform.value.tags.split(' ');

      const obj = this.addform.value;
      obj["tags"] = tags;
      console.log(this.addform.value);
      this.contactService.createContact(obj);
      this.router.navigate(['/dashboard/contacts'])
   }
   
}
