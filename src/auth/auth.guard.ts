import  { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { AuthPayloadDto } from './dto/auth.dto';    
import { Request } from 'express';
import { InjectModel } from '@nestjs/mongoose';
import { Token } from 'src/schemas/token.schema';
import { Model } from 'mongoose';
import { AuthService } from './auth.service';


@Injectable()
export class AuthGuard{

    constructor(private JwtService:JwtService,private authService:AuthService){}
    async canActivate(context: any): Promise<boolean>{
        const req:Request = context.switchToHttp().getRequest();
        const token = req.headers.authorization?.split(' ')[1]; 
        if (!token) {
            console.log("No token provided");
            return false; 
        }  
              
        
        const isActive = await this.authService.isActive(token);
        
        if(!isActive){
            console.log("token expired");
            return false;
        }
        
        try {
            const decoded = this.JwtService.verify(token, { secret: `${process.env.secret}` , clockTolerance:3600});           
            req["user"] = decoded;
            return true; 
        } catch (error) {
            console.log(error);
            return false; 
        }   
    }
}