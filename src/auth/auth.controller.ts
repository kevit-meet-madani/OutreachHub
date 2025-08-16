import { Controller , Get , Post , Body, HttpException, UsePipes , ValidationPipe} from '@nestjs/common';
import { AuthPayloadDto } from './dto/auth.dto';
import { AuthService } from './auth.service';
import express from 'express';
@Controller('auth')
export class AuthController {
    
    constructor(private authService:AuthService){}

    @Post('login')
    @UsePipes(new ValidationPipe())
    loginUser(@Body() authPayload:AuthPayloadDto){
         const user = this.authService.loginUser(authPayload);
         if(!user){
            throw new HttpException('Not found',404);
         }
         return user;
    }

    @Get('logout')
    logOut(req:express.Request){
        return this.authService.logOut(req);
    }
}
