import { Controller , Get , Post , Patch , Delete , Body, Param, UseGuards, Req} from "@nestjs/common";
import { ContactService } from "./contact.service";
import { createContactDto } from "./dto/create.contact.dto";
import { updateContactDto } from "./dto/update.contact.dto";
import { AuthGuard } from "src/auth/auth.guard";


@Controller('contacts')
export class ContactController{
     constructor(private contactService:ContactService){}

     @Get()
      @UseGuards(AuthGuard)
     getContacts(@Req() req : Request){
        return this.contactService.getContacts(req);
     }

     @Get(':id')
     @UseGuards(AuthGuard)
     getContactById(@Param('id') id:string){
        return this.contactService.getContactById(id);
     }

     @Post()
     @UseGuards(AuthGuard)
     createContact(@Body() contactDto:createContactDto){
        return this.contactService.createContact(contactDto);
     }

     @Delete(':id')
     @UseGuards(AuthGuard)
     deleteContact(@Param('id') id:string){
        return this.contactService.deleteContact(id);
     }

     @Patch(':id')
     @UseGuards(AuthGuard)
     updateContact(@Param('id') id:string, @Body() contactDto:updateContactDto){
        return this.contactService.updateContact(id,contactDto);
     }
}