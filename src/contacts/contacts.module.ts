import {Module} from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { OutContacts, OutContactsSchema } from 'src/schemas/contacts.schema';
import { ContactService } from './contact.service';
import { ContactController } from './contact.controller';
import { AuthModule } from 'src/auth/auth.module';

@Module({
    imports:[
        MongooseModule.forFeature([
            {
                name:OutContacts.name,
                schema:OutContactsSchema
           }
        ]),
        AuthModule
    ],
    providers:[ContactService],
    controllers:[ContactController]
})

export class ContactModule{}