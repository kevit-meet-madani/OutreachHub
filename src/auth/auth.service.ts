import { HttpException, Injectable, Req } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import mongoose from 'mongoose'
import { AuthPayloadDto } from './dto/auth.dto';
import {Model} from 'mongoose';
import { OutUser } from '../schemas/users.schema';
import { InjectModel } from '@nestjs/mongoose';
import * as bcrypt from 'bcrypt';
import { JwtModule } from '@nestjs/jwt';
import { Request } from 'express';
import { Token } from 'src/schemas/token.schema';

@Injectable()
export class AuthService {

    constructor(private jwtService: JwtService,@InjectModel(OutUser.name) private userModel:Model<OutUser>,@InjectModel(Token.name) private tokenModel:Model<Token>){}

    async loginUser({email,password}:AuthPayloadDto,req:Request){
        
        const findUser = await this.userModel.findOne({email}).exec();
        if(!findUser) throw new HttpException('User Not found',404);

        const result = await bcrypt.compare(password,findUser.password);
        
        if(!result){
            throw new HttpException('Password is incorrect',401);
        }

        const expiresAt = new Date(Date.now() + 60 * 60 * 1000); 

        const payload = {id:findUser._id,right:findUser.right}

        const token = this.jwtService.sign(payload,{secret : process.env.SECRET_KEY,expiresIn:'60m'});

        const obj = {
            token:token
        }
        const newToken = new this.tokenModel(obj);
        newToken.save();
         
        return {token:token};
    }

    async logOut(token:string){
        const obj = this.tokenModel.deleteOne({token}).exec();
        return obj;
    }

    async isActive(token:string){
        const res = await this.tokenModel.findOne({token}).exec(); 
        return res !==null;
    }
}
