import { IsNotEmpty , IsOptional} from "class-validator";
import mongoose from 'mongoose';

export class UpdateCampMessDto{
    
    @IsNotEmpty()
           campaignId:mongoose.Types.ObjectId;
       
          
           workspaceId:mongoose.Types.ObjectId;
       
           createdBy:mongoose.Types.ObjectId;
       
           
           templateData:Object;
       
           
           tags:string[];
       
           
           contacts:mongoose.Types.ObjectId[];
       
           createdAt:Date
}