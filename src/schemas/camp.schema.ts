import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose from 'mongoose'

@Schema({})
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

    @Prop({required:true,ref:'OutMessage'})
    templateId:mongoose.Types.ObjectId;

    @Prop({required:true})
    tags:string[];

    @Prop({default:Date.now})
    createdAt:Date
}    

export const CampaignSchema = SchemaFactory.createForClass(OutCampaign);