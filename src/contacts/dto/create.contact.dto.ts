import { IsNotEmpty , IsOptional } from "class-validator";
import mongoose from 'mongoose';


export class createContactDto{
   @IsNotEmpty()
   name:string;

   @IsNotEmpty()
   phoneNumber:string;

   @IsNotEmpty()
    tag:string
    
    createdBy:mongoose.Types.ObjectId;

    workspace:mongoose.Types.ObjectId;
}