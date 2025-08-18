import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { messageSchema, OutMessage } from 'src/schemas/message.schema';
import { MessageService } from './message.service';
import { MessageController } from './message.controller';
import { AuthModule } from 'src/auth/auth.module';

@Module({
   imports:[
    MongooseModule.forFeature([
        {
            name:OutMessage.name,
            schema:messageSchema
        }
    ]),
    AuthModule
   ],
   providers:[MessageService],
   controllers:[MessageController]
})

export class MsgModule{}