import { Component, Input } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ContactService } from '../contact.service';
import { Router , ActivatedRoute , Route} from '@angular/router';
import { Contact } from '../data';

@Component({
  selector: 'app-editcontact',
  templateUrl: './editcontact.component.html',
  styleUrl: './editcontact.component.scss'
})
export class EditcontactComponent {

  constructor(private contactService:ContactService,private router:Router,private route:ActivatedRoute) {}

  @Input() contact!:Contact
  editform!:FormGroup

  ngOnInit(){
        this.editform = new FormGroup({
          name:new FormControl('',[Validators.required]),
          phoneNumber: new FormControl('',[Validators.required]),
          tags:new FormControl('',[Validators.required])
        })
     }
  
     OnSubmit(){
        const tags = this.editform.value.tags.split(' ');
        const obj = this.editform.value;
        obj["tags"] = tags;
        const id = this.route.snapshot.paramMap.get('id');
        obj["id"] = id;
        this.contactService.editContact(obj);
        this.router.navigate(['/dashboard/contacts'])
     }
}
