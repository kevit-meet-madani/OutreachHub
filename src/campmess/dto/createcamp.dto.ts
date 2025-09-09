import { IsNotEmpty } from "class-validator";
import mongoose from 'mongoose'

export class CreateCamMessessDto{
    
    
    @IsNotEmpty()
       campaignId:mongoose.Types.ObjectId;
   
      @IsNotEmpty()
       workspaceId:mongoose.Types.ObjectId;
   
       createdBy:mongoose.Types.ObjectId;
   
       @IsNotEmpty()
       templateData:Object;
   
       @IsNotEmpty()
       tags:string[];
   
       @IsNotEmpty()
       contacts:mongoose.Types.ObjectId[];
   
       createdAt:Date
}