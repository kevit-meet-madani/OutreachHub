import { IsNotEmpty , IsOptional } from "class-validator";
import mongoose from 'mongoose';


export class updateContactDto{
   @IsNotEmpty()
   name:string;

   @IsOptional()
   phoneNumber:string;

   @IsOptional()
    tags:string[]
    
   @IsOptional()
    createdBy:mongoose.Types.ObjectId;

   @IsOptional()
    workspace:mongoose.Types.ObjectId;
}