import { IsNotEmpty , IsOptional } from "class-validator";
import mongoose from 'mongoose';


export class createContactDto{
   @IsNotEmpty()
   name:string;

   @IsNotEmpty()
   phoneNumber:string;

   @IsNotEmpty()
    tag:string
    
   @IsNotEmpty()
    createdBy:mongoose.Types.ObjectId;

   @IsNotEmpty()
    workspace:mongoose.Types.ObjectId;
}