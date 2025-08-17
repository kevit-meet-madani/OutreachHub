import { Controller , Get , Post , Body, HttpException, UsePipes , ValidationPipe, Req} from '@nestjs/common';
import { AuthPayloadDto } from './dto/auth.dto';
import { AuthService } from './auth.service';
import type { Request } from 'express';
import { request } from 'http';

@Controller('auth')
export class AuthController {
    
    constructor(private authService:AuthService){}

    @Post('login')
    @UsePipes(new ValidationPipe())
    loginUser(@Body() authPayload:AuthPayloadDto,@Req() req: Request){
         const user = this.authService.loginUser(authPayload,req);
         if(!user){
            throw new HttpException('Not found',404);
         }
         return user;
    }

    @Get('logout')
    logOut(@Req() req:Request){
        const token = req.headers.authorization?.split(' ')[1];
        if(!token){
            throw new HttpException('No token provided',401);
        }
        return this.authService.logOut(token);
    }
}
