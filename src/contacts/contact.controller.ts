import { Controller , Get , Post , Patch , Delete , Body, Param} from "@nestjs/common";
import { ContactService } from "./contact.service";
import { createContactDto } from "./dto/create.contact.dto";
import { updateContactDto } from "./dto/update.contact.dto";

@Controller('contacts')
export class ContactController{
     constructor(private contactService:ContactService){}

     @Get()
     getContacts(){
        return this.contactService.getContacts();
     }

     @Get(':id')
     getContactById(@Param('id') id:string){
        return this.contactService.getContactById(id);
     }

     @Post()
     createContact(@Body() contactDto:createContactDto){
        return this.contactService.createContact(contactDto);
     }

     @Delete(':id')
     deleteContact(@Param('id') id:string){
        return this.contactService.deleteContact(id);
     }

     @Patch(':id')
     updateContact(@Param('id') id:string, @Body() contactDto:updateContactDto){
        return this.contactService.updateContact(id,contactDto);
     }
}