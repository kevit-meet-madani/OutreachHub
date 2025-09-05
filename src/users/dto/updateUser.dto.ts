import { IsNotEmpty , IsOptional, MinLength } from "class-validator";
import mongoose from 'mongoose'

export class updateUserDto{
        
        username:string;
    
        @IsOptional()
        @MinLength(6)
        password:string;
    
         @IsOptional()
        role:string;
    
         @IsOptional()
        createdAt:Date;
    
        @IsOptional()
        right:string;
        
        workspaces:mongoose.Types.ObjectId[];
}