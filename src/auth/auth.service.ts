import { HttpException, Injectable } from '@nestjs/common';
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

    async loginUser({username,password}:AuthPayloadDto){
        
        const findUser = await this.userModel.findOne({username}).exec();
        if(!findUser) throw new HttpException('User Not found',404);

        const result = await bcrypt.compare(password,findUser.password);
        
        if(!result){
            throw new HttpException('Password is incorrect',404);
        }
        const payload = {id:findUser._id,username:findUser.username}

        const token = this.jwtService.sign(payload);
        console.log(token);
        const tokenObj = new this.tokenModel({token});
        return await tokenObj.save();
    }

    async logOut(req:Request){
        const token = req.headers.authorization?.split(' ')[1];
        
        const obj = this.tokenModel.deleteOne({token:token}).exec();
        return obj;
    }
}
