import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose from 'mongoose'

@Schema()
export class OutCampaign{
    
    @Prop({required:true})
    name:string;

    @Prop({required:true})
    status:string;

    @Prop({required:true})
    content:string;

    @Prop({required:true,ref:'OutWorkspace'})
    workspaceId:mongoose.Types.ObjectId;

    @Prop({required:true,ref:'OutUser'})
    createdBy:mongoose.Types.ObjectId;

    @Prop({required:true})
    tags:string;
}

export const CampaignSchema = SchemaFactory.createForClass(OutCampaign);