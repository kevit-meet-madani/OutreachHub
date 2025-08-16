import  { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { AuthPayloadDto } from './dto/auth.dto';    
import { Request } from 'express';


@Injectable()
export class AuthGuard{

    constructor(private JwtService:JwtService){}
    canActivate(context: any): boolean {
        const req:Request = context.switchToHttp().getRequest();
        const token = req.headers.authorization?.split(' ')[1]; 
        if (!token) {
            console.log("No token provided");
            return false; 
        }  
        console.log(token);                 
        try {
            const decoded = this.JwtService.verify(token);
            console.log(decoded);            
            req["user"] = decoded;
            console.log(req);
            return true; 
        } catch (error) {
            console.log(error);
            return false; 
        }   
    }
}