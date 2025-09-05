import { IsNotEmpty } from "class-validator";
import mongoose from 'mongoose'
export class CreateCampaignDto{
    @IsNotEmpty()
    name:string;
    
    @IsNotEmpty()
    status:string;
    
   @IsNotEmpty()
    content:string;
    
    @IsNotEmpty()
    workspaceId:mongoose.Types.ObjectId;
    
    @IsNotEmpty()
    createdBy:mongoose.Types.ObjectId;
    
    @IsNotEmpty()
    tag:string;
}