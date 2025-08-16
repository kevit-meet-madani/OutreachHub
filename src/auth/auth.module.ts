import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { JwtModule } from '@nestjs/jwt';
import { OutUser , OutUsersSchema} from 'src/schemas/users.schema';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthGuard } from './auth.guard';
import { Token, tokenSchema } from 'src/schemas/token.schema';
@Module({
  imports:[
    JwtModule.register({
      secret:'secret',
      signOptions: { expiresIn :'1h'},
    }),
    MongooseModule.forFeature([
          {
            name:OutUser.name,
            schema:OutUsersSchema,
          },
        ]),
        MongooseModule.forFeature([
          {
            name:Token.name,
            schema:tokenSchema,
          },
        ]),
  ],
  controllers: [AuthController],
  providers: [AuthService,AuthGuard],
  exports: [AuthService, JwtModule]
})
export class AuthModule {}
