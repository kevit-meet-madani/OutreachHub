import {Module} from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { OutContacts, OutContactsSchema } from 'src/schemas/contacts.schema';
import { ContactService } from './contact.service';
import { ContactController } from './contact.controller';

@Module({
    imports:[
        MongooseModule.forFeature([
            {
                name:OutContacts.name,
                schema:OutContactsSchema
           }
        ])
    ],
    providers:[ContactService],
    controllers:[ContactController]
})

export class ContactModule{}