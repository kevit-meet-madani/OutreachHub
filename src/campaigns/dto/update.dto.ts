import { IsNotEmpty , IsOptional} from "class-validator";
import mongoose from 'mongoose';

export class UpdateCampaignDto{
    @IsNotEmpty()
    name:string;
    
    @IsOptional()
    status:string;
    
   @IsOptional()
    content:string;
    
    @IsOptional()
    workspaceId:mongoose.Types.ObjectId;
    
    @IsOptional()
    createdBy:mongoose.Types.ObjectId;
    
    @IsOptional()
    tags:string;
}