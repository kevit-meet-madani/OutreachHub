import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthModule } from './auth/auth.module';
import { WorkspacesModule } from './workspaces/workspaces.module';
import { ContactModule } from './contacts/contacts.module';
import { CampModule } from './campaigns/camp.module';
import { MsgModule } from './message/msg.module';
import { Token } from './schemas/token.schema';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env',
    }),
    MongooseModule.forRoot(`${process.env.DBURL}`),
    UsersModule,
    AuthModule,
    WorkspacesModule, 
    ContactModule,    
    CampModule,
    MsgModule,
    Token,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
