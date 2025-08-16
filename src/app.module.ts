import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthModule } from './auth/auth.module';
import { WorkspacesModule } from './workspaces/workspaces.module';
import { ContactModule } from './contacts/contacts.module';
import { CampModule } from './campaigns/camp.module';
import { MsgModule } from './message/msg.module';
import { Token } from './schemas/token.schema';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb+srv://--------------@cluster0.k81uvvx.mongodb.net/'),
    UsersModule,
    AuthModule,
    WorkspacesModule,
    ContactModule,
    CampModule,
    MsgModule,
    Token
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
