import { Module } from '@nestjs/common';
import { UsersController } from './controllers/users/users.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { OutUser , OutUsersSchema } from 'src/schemas/users.schema';
import { UserService } from './users.service';
import { JwtService } from '@nestjs/jwt';
import { AuthModule } from 'src/auth/auth.module';

@Module({
  imports:[
    MongooseModule.forFeature([
      {
        name:OutUser.name,
        schema:OutUsersSchema,
      },
    ]),
    AuthModule
  ],
  providers:[UserService],
  controllers:[UsersController]
})
export class UsersModule {}
